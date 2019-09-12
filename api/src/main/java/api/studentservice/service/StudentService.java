package api.studentservice.service;

import api.studentservice.model.StudentModel;
import api.studentservice.model.ViewModel;
import api.studentservice.repository.StudentServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentServiceRepository studentServiceRepository;

    public List<ViewModel> getAllStudents(){
        List<ViewModel> students = new ArrayList<>();
        Iterable<StudentModel> studentModel =  studentServiceRepository.findAll();
        for (StudentModel student: studentModel) {
            ViewModel studentView = new ViewModel(student.getId(),student.getName(),student.getSclass(),student.getAddress());
            students.add(studentView);
        }
        return students;
    }

    public ViewModel getStudent(String id){
        StudentModel student = studentServiceRepository.findById(id).get();
        ViewModel studentView = new ViewModel(student.getId(),student.getName(),student.getSclass(),student.getAddress());
        return studentView;
    }

    public void addStudent(ViewModel viewModel) {
        StudentModel newStudent = new StudentModel();
        validation(viewModel,newStudent);
        studentServiceRepository.save(newStudent);
    }

    public void updateStudent(String id, ViewModel viewModel) {
        StudentModel updateStudent = new StudentModel();
        validation(viewModel,updateStudent);
        studentServiceRepository.save(updateStudent);
    }

    public void patchUpdate(ViewModel viewModel)
    {
        StudentModel patchUpdateStudent = new StudentModel();
        validation(viewModel,patchUpdateStudent);
        studentServiceRepository.save(patchUpdateStudent);
    }

    public void validation(ViewModel viewModel, StudentModel studentModel)
    {
        if(viewModel.getId()!=null)
        {
           studentModel.setId(viewModel.getId());
        }
        if(viewModel.getName()!=null)
        {
           studentModel.setName(viewModel.getName());
        }
        if(viewModel.getSclass()!=null)
        {
            studentModel.setSclass(viewModel.getSclass());
        }
        if(viewModel.getAddress()!=null)
        {
            studentModel.setAddress(viewModel.getAddress());
        }
    }

}
