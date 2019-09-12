package api.studentservice.repository;

import api.studentservice.model.StudentModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentServiceRepository extends CrudRepository<StudentModel, String> {
}
