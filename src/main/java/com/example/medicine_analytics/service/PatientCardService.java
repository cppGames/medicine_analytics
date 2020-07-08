package com.example.medicine_analytics.service;

import com.example.medicine_analytics.model.PatientCard;
import com.example.medicine_analytics.model.MedicalType;
import com.example.medicine_analytics.repository.PatientCardRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class PatientCardService implements IPatientCardService {
    private static final Logger LOGGER = LoggerFactory.getLogger(PatientCardService.class);
    @Autowired
    PatientCardRepository repository;

    @Override
    public List<PatientCard> findAll() {
        LOGGER.debug("Searching all person cards without criteria" );
        return repository.findAll();
    }

    @Override
    public List<PatientCard> findUserByGenderAndId(Long patientId, String patientGender) {
        return repository.findUserByGenderAndId(patientId, patientGender);
    }

    @Override
    public List<PatientCard> findBySum_moneyGreaterThan(float sum_money) {
        return repository.findBySumMoneyIsGreaterThan(sum_money);
    }

    @Override
    public List<String> filterCancerTypeCut() {
        return repository.filterCancerTypeCut();
    }

    @Override
    public List<Object> findPatientCardByCard(PatientCard patientCard) {
        List<List<Object>> items = repository.findPatientCardByCard(patientCard);
        List<MedicalType> res = new ArrayList<>();

        Map<String, List<MedicalType>> groupedByOperation = items
                .stream()
                .map(item -> new MedicalType(
                    (Integer) item.get(0),
                    (String) item.get(1),
                    (Float) item.get(2),
                    (Integer) item.get(3)))
                .collect(Collectors.groupingBy(MedicalType::getTreatmentOperation));

        List<Object> response = new ArrayList<>();
        DecimalFormat moneyDF = new DecimalFormat("#.##");
        DecimalFormat probabilityDF = new DecimalFormat("#.##");
        groupedByOperation.forEach((treatmentOperationId, medicalTypeList) -> {
            int typeListSize = medicalTypeList.size();
            Map<String, Object> responseItem = new HashMap<>();
            responseItem.put("id", treatmentOperationId);
            responseItem.put("name", treatmentOperationId);
            responseItem.put("count", medicalTypeList
                    .stream()
                    .mapToInt(MedicalType::getCnt)
                    .sum());

            Map<Integer, List<MedicalType>> groupedByTarget = medicalTypeList
                    .stream()
                    .collect(Collectors.groupingBy(MedicalType::getTarget));

            responseItem.put("price", moneyDF.format(medicalTypeList
                    .stream()
                    .mapToDouble(MedicalType::getSumMoney)
                    .average()
                    .orElse(Double.NaN)));

            responseItem.put("bad", 0);
            responseItem.put("normal", 0);
            responseItem.put("good", 0);

            groupedByTarget.forEach((k, v) -> {
                String key = "";
                switch (k.toString()) {
                    case "1":
                        key = "good";
                        break;
                    case "0":
                        key = "normal";
                        break;
                    case "-1":
                        key = "bad";
                        break;
                }
                responseItem.put(key, probabilityDF.format(((double) v.size()/(double) typeListSize)* 100));
            });
            response.add(responseItem);
        });
        return response;
    }

    @Override
    public List<Object> FilterDashboard() {
        List<Object> filterDashboard = new ArrayList<Object>();

        HashMap<String, Object> enter = new HashMap<String, Object>();
        HashMap<String, Object> medical = new HashMap<String, Object>();

        enter.put("name", "Входные параметры");
        medical.put("name", "Параметры лечения");

        List<Object> enterParam = new ArrayList<Object>();
        List<Object> medicalParam = new ArrayList<Object>();

        HashMap<String, Object> registryTerritoryCode = new HashMap<String, Object>();
        registryTerritoryCode.put("id", "registryTerritoryCode");
        registryTerritoryCode.put("name", "Регион");
        registryTerritoryCode.put("items", repository.filterRegistryTerritoryCode());
        enterParam.add(registryTerritoryCode);

        HashMap<String, Object> cancerTypeCut = new HashMap<>();
        cancerTypeCut.put("id", "cancerTypeCut");
        cancerTypeCut.put("name", "Вид рака");
        cancerTypeCut.put("items", repository.filterCancerTypeCut());
        enterParam.add(cancerTypeCut);

        HashMap<String, Object> cancerStageCut = new HashMap<>();
        cancerStageCut.put("id", "cancerStageCut");
        cancerStageCut.put("name", "Стадия рака");
        cancerStageCut.put("items", repository.filterCancerStageCut());
        enterParam.add(cancerStageCut);


        HashMap<String, Object> registryZapZslForPom = new HashMap<>();
        registryZapZslForPom.put("id", "registryZapZslForPom");
        registryZapZslForPom.put("name", "Вид помощи");
        registryZapZslForPom.put("items", repository.filterRegistryZapZslForPom());
        enterParam.add(registryZapZslForPom);

        HashMap<String, Object> reasonOfAppeal = new HashMap<>();
        reasonOfAppeal.put("id", "reasonOfAppeal");
        reasonOfAppeal.put("name", "Неотложная");
        reasonOfAppeal.put("items", repository.filterReasonOfAppeal());
        enterParam.add(reasonOfAppeal);

        HashMap<String, Object> gender = new HashMap<>();
        gender.put("id", "gender");
        gender.put("name", "Пол");
        gender.put("items", repository.filterGender());
        enterParam.add(gender);

        HashMap<String, Object> ageBins = new HashMap<>();
        ageBins.put("id", "ageBins");
        ageBins.put("name", "Возростная группа");
        ageBins.put("items", repository.filterAgeBins());
        enterParam.add(ageBins);

        HashMap<String, Object> kdzBins = new HashMap<>();
        kdzBins.put("id", "kdzBins");
        kdzBins.put("name", "Продолжительность госпитализации");
        kdzBins.put("items", repository.filterKdzBins());
        medicalParam.add(kdzBins);

        HashMap<String, Object> sumBins = new HashMap<>();
        sumBins.put("id", "sumBins");
        sumBins.put("name", "Стоимость лечения");
        sumBins.put("items", repository.filterSumBins());
        medicalParam.add(sumBins);

        HashMap<String, Object> radiationDozeBins = new HashMap<>();
        radiationDozeBins.put("id", "radiationDozeBins");
        radiationDozeBins.put("name", "Доза радиации");
        radiationDozeBins.put("items", repository.filterRadiationDozeBins());
        medicalParam.add(radiationDozeBins);

        HashMap<String, Object> daysStartNprBins = new HashMap<>();
        daysStartNprBins.put("id", "daysStartNprBins");
        daysStartNprBins.put("name", "Количество дней до даты направления на лечение");
        daysStartNprBins.put("items", repository.filterDaysStartNprBins());
        medicalParam.add(daysStartNprBins);

        HashMap<String, Object> metastasisBins = new HashMap<>();
        metastasisBins.put("id", "metastasisBins");
        metastasisBins.put("name", "Количество дней до даты направления на лечение");
        metastasisBins.put("items", repository.filterMetastasisBins());
        medicalParam.add(metastasisBins);

        enter.put("params", enterParam);
        medical.put("params", medicalParam);

        filterDashboard.add(enter);
        filterDashboard.add(medical);

        return filterDashboard;
    }
}
