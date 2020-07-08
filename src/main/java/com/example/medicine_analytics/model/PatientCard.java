package com.example.medicine_analytics.model;

import javax.persistence.*;
import com.opencsv.bean.CsvBindByName;

// this name use in JPQL Queries
@Entity(name = "PatientCard")
@Table(name = "PATIENT_CARD")
public class PatientCard {
    @Id
    @GeneratedValue
    private Long id;
    @CsvBindByName
    private Integer target;
    @CsvBindByName(column = "treatment_operation")
    private String treatmentOperation;
    @CsvBindByName(column = "Registry_TerritoryCode")
    private String registryTerritoryCode;
    @CsvBindByName(column = "cancer_type_cut")
    private String cancerTypeCut;
    @CsvBindByName(column = "cancer_stage_cut")
    private Integer cancerStageCut;
    @CsvBindByName(column = "RegistryZapZsl_forPom")
    private String registryZapZslForPom;
    @CsvBindByName(column = "reason_of_appeal")
    private String reasonOfAppeal;
    @CsvBindByName
    private String gender;
    @CsvBindByName(column = "age_bins")
    private String ageBins;
    @CsvBindByName(column = "kdZ_bins")
    private String kdzBins;
    @CsvBindByName(column = "sum_bins")
    private String sumBins;
    @CsvBindByName(column = "radiation_doze_bins")
    private String radiationDozeBins;
    @CsvBindByName(column = "days_start_npr_bins")
    private String daysStartNprBins;
    @CsvBindByName(column = "metastasis_bins")
    private String metastasisBins;
    @CsvBindByName(column = "sum_money")
    private Float sumMoney;
    @CsvBindByName
    private Integer cnt;

    public PatientCard() {}

    public PatientCard(
            Integer target,
            String treatmentOperation,
            String registryTerritoryCode,
            String cancerTypeCut,
            Integer cancerStageCut,
            String registryZapZslForPom,
            String reasonOfAppeal,
            String gender,
            String ageBins,
            String kdzBins,
            String sumBins,
            String radiationDozeBins,
            String daysStartNprBins,
            String metastasisBins,
            Float sumMoney,
            Integer cnt) {
        this.target = target;
        this.treatmentOperation = treatmentOperation;
        this.registryTerritoryCode = registryTerritoryCode;
        this.cancerTypeCut = cancerTypeCut;
        this.cancerStageCut = cancerStageCut;
        this.registryZapZslForPom = registryZapZslForPom;
        this.reasonOfAppeal = reasonOfAppeal;
        this.gender = gender;
        this.ageBins = ageBins;
        this.kdzBins = kdzBins;
        this.sumBins = sumBins;
        this.radiationDozeBins = radiationDozeBins;
        this.daysStartNprBins = daysStartNprBins;
        this.metastasisBins = metastasisBins;
        this.sumMoney = sumMoney;
        this.cnt = cnt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getTarget() {
        return target;
    }

    public void setTarget(Integer target) {
        this.target = target;
    }

    public String getTreatmentOperation() {
        return treatmentOperation;
    }

    public void setTreatmentOperation(String treatmentOperation) {
        this.treatmentOperation = treatmentOperation;
    }

    public String getRegistryTerritoryCode() {
        return registryTerritoryCode;
    }

    public void setRegistryTerritoryCode(String registryTerritoryCode) {
        this.registryTerritoryCode = registryTerritoryCode;
    }

    public String getCancerTypeCut() {
        return cancerTypeCut;
    }

    public void setCancerTypeCut(String cancerTypeCut) {
        this.cancerTypeCut = cancerTypeCut;
    }

    public Integer getCancerStageCut() {
        return cancerStageCut;
    }

    public void setCancerStageCut(Integer cancerStageCut) {
        this.cancerStageCut = cancerStageCut;
    }

    public String getRegistryZapZslForPom() {
        return registryZapZslForPom;
    }

    public void setRegistryZapZslForPom(String registryZapZslForPom) {
        this.registryZapZslForPom = registryZapZslForPom;
    }

    public String getReasonOfAppeal() {
        return reasonOfAppeal;
    }

    public void setReasonOfAppeal(String reasonOfAppeal) {
        this.reasonOfAppeal = reasonOfAppeal;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAgeBins() {
        return ageBins;
    }

    public void setAgeBins(String ageBins) {
        this.ageBins = ageBins;
    }

    public String getKdzBins() {
        return kdzBins;
    }

    public void setKdzBins(String kdzBins) {
        this.kdzBins = kdzBins;
    }

    public String getSumBins() {
        return sumBins;
    }

    public void setSumBins(String sumBins) {
        this.sumBins = sumBins;
    }

    public String getRadiationDozeBins() {
        return radiationDozeBins;
    }

    public void setRadiationDozeBins(String radiationDozeBins) {
        this.radiationDozeBins = radiationDozeBins;
    }

    public String getDaysStartNprBins() {
        return daysStartNprBins;
    }

    public void setDaysStartNprBins(String daysStartNprBins) {
        this.daysStartNprBins = daysStartNprBins;
    }

    public String getMetastasisBins() {
        return metastasisBins;
    }

    public void setMetastasisBins(String metastasisBins) {
        this.metastasisBins = metastasisBins;
    }

    public Float getSumMoney() {
        return sumMoney;
    }

    public void setSumMoney(Float sumMoney) {
        this.sumMoney = sumMoney;
    }

    public Integer getCnt() {
        return cnt;
    }

    public void setCnt(Integer cnt) {
        this.cnt = cnt;
    }

    @Override
    public String toString() {
        return "PatientCard{" +
                "id=" + id +
                ", target=" + target +
                ", treatmentOperation='" + treatmentOperation + '\'' +
                ", registryTerritoryCode='" + registryTerritoryCode + '\'' +
                ", cancerTypeCut='" + cancerTypeCut + '\'' +
                ", cancerStageCut=" + cancerStageCut +
                ", registryZapZslForPom='" + registryZapZslForPom + '\'' +
                ", reasonOfAppeal='" + reasonOfAppeal + '\'' +
                ", gender='" + gender + '\'' +
                ", ageBins='" + ageBins + '\'' +
                ", kdzBins='" + kdzBins + '\'' +
                ", sumBins='" + sumBins + '\'' +
                ", radiationDozeBins='" + radiationDozeBins + '\'' +
                ", daysStartNprBins='" + daysStartNprBins + '\'' +
                ", metastasisBins='" + metastasisBins + '\'' +
                ", sumMoney=" + sumMoney +
                ", cnt=" + cnt +
                '}';
    }
}
