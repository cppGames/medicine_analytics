package com.example.medicine_analytics;

import com.example.medicine_analytics.repository.PatientCardRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

//
// run ALL CommandLineRunner beans
// once the application context is loaded
//

@Component
public class PreloadDatabase implements CommandLineRunner {
    private static final Logger logger = LoggerFactory.getLogger(PreloadDatabase.class);

    @Autowired
    PatientCardRepository repository;

    void outputMessage() {
        logger.info("Main Message");
    }

    @Override
    public void run(String... args){
        outputMessage();
    }
}
