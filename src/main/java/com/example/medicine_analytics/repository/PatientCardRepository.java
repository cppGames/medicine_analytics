package com.example.medicine_analytics.repository;

import com.example.medicine_analytics.model.PatientCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientCardRepository extends JpaRepository<PatientCard, Long> {

    // prepared search query
    List<PatientCard> findBySumMoneyIsGreaterThan(float sum_money);

    // filetrs
    @Query("select DISTINCT(p.registryTerritoryCode) from PatientCard p")
    List<String> filterRegistryTerritoryCode();

    @Query("select DISTINCT(p.cancerTypeCut) from PatientCard p")
    List<String> filterCancerTypeCut();

    @Query("select DISTINCT(p.cancerStageCut) from PatientCard p")
    List<String> filterCancerStageCut();

    @Query("select DISTINCT(p.registryZapZslForPom) from PatientCard p")
    List<String> filterRegistryZapZslForPom();

    @Query("select DISTINCT(p.reasonOfAppeal) from PatientCard p")
    List<String> filterReasonOfAppeal();

    @Query("select DISTINCT(p.gender) from PatientCard p")
    List<String> filterGender();

    @Query("select DISTINCT(p.ageBins) from PatientCard p")
    List<String> filterAgeBins();

    @Query("select DISTINCT(p.kdzBins) from PatientCard p")
    List<String> filterKdzBins();

    @Query("select DISTINCT(p.sumBins) from PatientCard p")
    List<String> filterSumBins();

    @Query("select DISTINCT(p.radiationDozeBins) from PatientCard p")
    List<String> filterRadiationDozeBins();

    @Query("select DISTINCT(p.daysStartNprBins) from PatientCard p")
    List<String> filterDaysStartNprBins();

    @Query("select DISTINCT(p.metastasisBins) from PatientCard p")
    List<String> filterMetastasisBins();

    @Query("SELECT p FROM PatientCard p WHERE p.id = :id AND LOWER(p.gender) = LOWER(:gender)")
    List<PatientCard> findUserByGenderAndId(
            @Param("id") Long patientId,
            @Param("gender") String patientGender
    );

    // raw search query
    @Query("SELECT p.target, p.treatmentOperation, p.sumMoney, p.cnt FROM PatientCard p WHERE " +
            "(:#{#patientCard.registryTerritoryCode} IS NULL OR p.registryTerritoryCode = :#{#patientCard.registryTerritoryCode}) AND " +
            "(:#{#patientCard.cancerTypeCut} IS NULL OR p.cancerTypeCut = :#{#patientCard.cancerTypeCut}) AND " +
            "(:#{#patientCard.cancerStageCut} IS NULL OR p.cancerStageCut = :#{#patientCard.cancerStageCut}) AND " +
            "(:#{#patientCard.registryZapZslForPom} IS NULL OR p.registryZapZslForPom = :#{#patientCard.registryZapZslForPom}) AND " +
            "(:#{#patientCard.reasonOfAppeal} IS NULL OR p.reasonOfAppeal = :#{#patientCard.reasonOfAppeal}) AND " +
            "(:#{#patientCard.gender} IS NULL OR p.gender = :#{#patientCard.gender}) AND " +
            "(:#{#patientCard.ageBins} IS NULL OR p.ageBins = :#{#patientCard.ageBins}) AND " +
            "(:#{#patientCard.kdzBins} IS NULL OR p.kdzBins = :#{#patientCard.kdzBins}) AND " +
            "(:#{#patientCard.sumBins} IS NULL OR p.sumBins = :#{#patientCard.sumBins}) AND " +
            "(:#{#patientCard.radiationDozeBins} IS NULL OR p.radiationDozeBins = :#{#patientCard.radiationDozeBins}) AND " +
            "(:#{#patientCard.daysStartNprBins} IS NULL OR p.daysStartNprBins = :#{#patientCard.daysStartNprBins})")
    List<List<Object>> findPatientCardByCard(
            @Param("patientCard") PatientCard patientCard);
}

