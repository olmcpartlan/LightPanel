package org.eoghancorp.hue.models;

import java.util.Date;

public class Light {
    private State state;
    private SwUpdate swupdate;
    private String type;
    private String name;
    private String modelid;
    private String manufacturername;
    private String productname;
    private Capabilities capabilities;
    private Config config;
    private String uniqueid;
    private String swversion;
    private String swconfigid;
    private String productid;

    public Capabilities getCapabilities() { return capabilities; }

    public Config getConfig() { return config; }

    public String getName() { return name; }

    public String getUniqueid() { return uniqueid; }

    public State getState() { return state; }

    public String getManufacturername() { return manufacturername; }

    public String getModelid() { return modelid; }

    public String getProductid() { return productid; }

    public String getProductname() { return productname; }

    public String getSwconfigid() { return swconfigid; }

    public String getType() { return type; }

    public String getSwversion() { return swversion; }

    public SwUpdate getSwupdate() { return swupdate; }

    public void setName(String name) { this.name = name; }

    public void setManufacturername(String manufacturername) { this.manufacturername = manufacturername; }

    public void setModelid(String modelid) { this.modelid = modelid; }

    public void setProductid(String productid) { this.productid = productid; }

    public void setProductname(String productname) { this.productname = productname; }

    public void setState(State state) { this.state = state; }

    public void setSwconfigid(String swconfigid) { this.swconfigid = swconfigid; }

    public void setCapabilities(Capabilities capabilities) { this.capabilities = capabilities; }

    public void setConfig(Config config) { this.config = config; }

    public void setSwupdate(SwUpdate swupdate) { this.swupdate = swupdate; }

    public void setSwversion(String swversion) { this.swversion = swversion; }

    public void setType(String type) { this.type = type; }

    public void setUniqueid(String uniqueid) { this.uniqueid = uniqueid; }
}






