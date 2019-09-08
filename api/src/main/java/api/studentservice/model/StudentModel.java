package api.studentservice.model;

public class StudentModel {
    private String sId;
    private String sName;
    private String sClass;
    private String sAddress;

    public StudentModel() {

    }

    public StudentModel(String sId, String sName, String sClass, String sAddress) {
        this.sId = sId;
        this.sName = sName;
        this.sClass = sClass;
        this.sAddress = sAddress;
    }

    public String getsId() {
        return sId;
    }

    public void setsId(String sId) {
        this.sId = sId;
    }

    public String getsName() {
        return sName;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public String getsClass() {
        return sClass;
    }

    public void setsClass(String sClass) {
        this.sClass = sClass;
    }

    public String getsAddress() {
        return sAddress;
    }

    public void setsAddress(String sAddress) {
        this.sAddress = sAddress;
    }
}
