package com.example.medicine_analytics.service;


import com.example.medicine_analytics.model.PatientCard;

import java.util.List;

public interface IPatientCardService {
    List<PatientCard> findAll();
    List<PatientCard> findUserByGenderAndId(Long patientId, String patientGender);
    List<PatientCard> findBySum_moneyGreaterThan(float sum_money);
    List<String> filterCancerTypeCut();
    List<Object> findPatientCardByCard(PatientCard patientCard);
    List<Object> FilterDashboard();
}
