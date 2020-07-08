package com.example.medicine_analytics;

import com.example.medicine_analytics.model.PatientCard;
import com.example.medicine_analytics.repository.PatientCardRepository;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.bean.HeaderColumnNameMappingStrategy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.BufferedReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


//
// run ALL CommandLineRunner BEANS
// once the application context is loaded
//  BEANS - return some data
//

@Configuration
class LoadDatabase {

    private static final Logger logger = LoggerFactory.getLogger(PreloadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(PatientCardRepository repository) {
        return args -> {
            String fileName = "src/main/resources/data_grouped.csv";
            Path myPath = Paths.get(fileName);
            logger.info("Started initialize database");
            try (BufferedReader br = Files.newBufferedReader(myPath,
                    StandardCharsets.UTF_8)) {

                HeaderColumnNameMappingStrategy<PatientCard> strategy
                        = new HeaderColumnNameMappingStrategy<>();
                strategy.setType(PatientCard.class);

                CsvToBean<PatientCard> csvToBean = new CsvToBeanBuilder<PatientCard>(br)
                        .withMappingStrategy(strategy)
                        .withIgnoreLeadingWhiteSpace(true)
                        .build();

                // Reads all CSV contents into memory (Not suitable for large CSV files)
                // List<PatientCard> cards = csvToBean.parse();
                csvToBean.forEach(repository::save);
                logger.info("Finished initialize database");
            }
        };
    }
}