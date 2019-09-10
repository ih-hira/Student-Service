package api.studentservice.service;

import api.studentservice.model.StudentModel;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class StudentService {
    private List<StudentModel> students = new ArrayList<>(Arrays.asList(
            new StudentModel("150104001", "Imtiyaz", "8", "Tejgaon"),
            new StudentModel("150104002", "Doyetaa", "9", "Banani"),
            new StudentModel("150104003", "Alvi", "5", "Uttara")
    ));

    public List<StudentModel> getAllStudents(){
        return students;
    }

    public StudentModel getStudent(String id){
        return students.stream().filter(s -> s.getId().equals(id)).findFirst().get();
    }

    public void addStudent(StudentModel studentModel) {
        students.add(studentModel);
    }

    public void updateStudent(String id, StudentModel studentModel) {
        for(int i=0;i<students.size();i++){
            StudentModel s = students.get(i);
            if(s.getId().equals(id)){
                students.set(i,studentModel);
                return;
            }
        }
    }
}
