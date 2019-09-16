package api.studentservice.service;

import api.studentservice.model.StudentModel;
import api.studentservice.model.StudentViewModel;
import api.studentservice.repository.StudentServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentServiceRepository studentServiceRepository;

    public List<StudentViewModel> getAllStudents(){
        List<StudentViewModel> students = new ArrayList<>();
        Iterable<StudentModel> studentModel =  studentServiceRepository.findAll();
        for (StudentModel student: studentModel) {
            StudentViewModel studentView = new StudentViewModel(student.getId(),student.getName(),student.getSclass(),student.getAddress());
            students.add(studentView);
        }
        return students;
    }

    public StudentViewModel getStudent(String id){
        StudentModel student = studentServiceRepository.findById(id).get();
        StudentViewModel studentView = new StudentViewModel(student.getId(),student.getName(),student.getSclass(),student.getAddress());
        return studentView;
    }

    public void addStudent(StudentViewModel studentViewModel) {
        StudentModel newStudent = new StudentModel();
        validation(studentViewModel,newStudent);
        studentServiceRepository.save(newStudent);
    }

    public void updateStudent(String id, StudentViewModel studentViewModel) {
        StudentModel updateStudent = new StudentModel();
        validation(studentViewModel,updateStudent);
        studentServiceRepository.save(updateStudent);
    }

    public void patchUpdate(StudentViewModel studentViewModel)
    {
        StudentModel patchUpdateStudent = new StudentModel();
        validation(studentViewModel,patchUpdateStudent);
        studentServiceRepository.save(patchUpdateStudent);
    }

    public void validation(StudentViewModel studentViewModel, StudentModel studentModel)
    {
        if(studentViewModel.getId()!=null)
        {
           studentModel.setId(studentViewModel.getId());
        }
        if(studentViewModel.getName()!=null)
        {
           studentModel.setName(studentViewModel.getName());
        }
        if(studentViewModel.getSclass()!=null)
        {
            studentModel.setSclass(studentViewModel.getSclass());
        }
        if(studentViewModel.getAddress()!=null)
        {
            studentModel.setAddress(studentViewModel.getAddress());
        }
    }

}
