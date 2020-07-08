package com.example.medicine_analytics.model;

public class MedicalType {
    private Integer target;
    private String treatmentOperation;
    private Float sumMoney;
    private Integer cnt;

    public MedicalType(Integer target, String treatmentOperation, Float sumMoney, Integer cnt) {
        this.target = target;
        this.treatmentOperation = treatmentOperation;
        this.sumMoney = sumMoney;
        this.cnt = cnt;
    }

    public MedicalType() {}

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
        return "Type{" +
                "target=" + target +
                ", treatmentOperation='" + treatmentOperation + '\'' +
                ", sumMoney=" + sumMoney +
                ", cnt=" + cnt +
                '}';
    }
}
