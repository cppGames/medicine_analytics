package com.example.medicine_analytics.controller;

import com.example.medicine_analytics.model.PatientCard;
import com.example.medicine_analytics.service.IPatientCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController()
@RequestMapping("/v1/api/patient-card")
public class PatientCardController {
    @Autowired
    IPatientCardService service;

    @RequestMapping(
            value = "/",
            method = RequestMethod.GET)
    public List<PatientCard> find_all(){
        return service.findAll();
    }

    @RequestMapping(
            value = "/filter-dashboard",
            method = RequestMethod.GET)
    public List<Object> filter_dashboard(){
        return service.FilterDashboard();
    }

    @RequestMapping(
            value = "/{id}/{gender}",
            method = RequestMethod.GET)
    public List<PatientCard> find_user_by_gender_and_id(@PathVariable Long id, @PathVariable String gender) {
        return service.findUserByGenderAndId(id, gender);
                //.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "CryptoCurrency Not Found"));
    }

    @RequestMapping(
            value = "/filter/cancer-type",
            method = RequestMethod.GET)
    public List<String> filter_cancer_type_cut(){
        return service.filterCancerTypeCut();
    }

    @RequestMapping(
            value = "/",
            method = RequestMethod.POST
    )
    @ResponseBody
    public List<Object> find_raw(@RequestBody PatientCard card){
        System.out.println(card);
        return service.findPatientCardByCard(card);
        // return service.update(code, cryptoCurrency);
    }

    @RequestMapping(
            value = "/money/{sum_money}",
            method = RequestMethod.GET)
    public List<PatientCard> findBySum_moneyGreaterThan(@PathVariable("sum_money") float sum_money) {
        return  service.findBySum_moneyGreaterThan(sum_money);
    }
}
