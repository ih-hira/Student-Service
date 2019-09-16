package api.studentservice.controller;

import api.studentservice.model.StudentViewModel;
import api.studentservice.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentServiceContoller {

    @Autowired
    private StudentService studentService;

    //MARK: Get All Students
    @RequestMapping("/students")
    @CrossOrigin(origins = "http://localhost:8080")
    public List<StudentViewModel> getAllStudents(){
        return studentService.getAllStudents();
    }

    //MARK: Get Student by Id
    @RequestMapping("/students/{id}")
    @CrossOrigin(origins = "http://localhost:8080")
    public StudentViewModel getStudent(@PathVariable String id){
        return studentService.getStudent(id);
    }

    //MARK: Add new student
    @RequestMapping(method = RequestMethod.POST, value = "/students")
    @CrossOrigin(origins = "http://localhost:8080")
    public void addStudent(@RequestBody StudentViewModel studentViewModel){
        studentService.addStudent(studentViewModel);
    }

    //MARK: Update student information
    @RequestMapping(method = RequestMethod.PUT, value = "/students/{id}")
    @CrossOrigin(origins = "http://localhost:8080")
    public void updateStudent(@RequestBody StudentViewModel studentViewModel, @PathVariable String id){
        studentService.updateStudent(id, studentViewModel);
    }

    //MARK: Update student information
    @RequestMapping(method = RequestMethod.PATCH, value = "/students/{id}")
    @CrossOrigin(origins = "http://localhost:8080")
    public void patchUpdateStudent(@RequestBody StudentViewModel studentViewModel, @PathVariable String id) {
        studentService.patchUpdate(studentViewModel);
    }
}
