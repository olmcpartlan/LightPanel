package org.eoghancorp.hue.models;

import java.util.Date;

public class SwUpdate {
    private String state;
    private Date lastinstall;

    public Date getLastinstall() { return lastinstall; }

    public String getState() { return state; }

    public void setLastinstall(Date lastinstall) { this.lastinstall = lastinstall; }

    public void setState(String state) { this.state = state; }
}
