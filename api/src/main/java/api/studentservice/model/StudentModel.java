package api.studentservice.model;

public class StudentModel {
    private String id;
    private String name;
    private String sclass;
    private String address;

    public StudentModel() {

    }

    public StudentModel(String id, String name, String sclass, String address) {
        this.id = id;
        this.name = name;
        this.sclass = sclass;
        this.address = address;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSclass() {
        return sclass;
    }

    public void setSclass(String sclass) {
        this.sclass = sclass;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
