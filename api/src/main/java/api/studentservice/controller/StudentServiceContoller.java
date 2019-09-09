package api.studentservice.controller;

import api.studentservice.model.StudentModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class StudentServiceContoller {
    @RequestMapping("/students")
    @CrossOrigin(origins = "http://localhost:8080")
    public List<StudentModel> getAllStudents(){
        return Arrays.asList(
                new StudentModel("150104001", "Imtiyaz", "8", "Tejgaon"),
                new StudentModel("150104002", "Doyetaa", "9", "Banani"),
                new StudentModel("150104003", "Alvi", "5", "Uttara")
        );
    }
}
