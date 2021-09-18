package org.eoghancorp.hue.models;

public class State {
    private boolean on;
    private long bri;
    private long ct;
    private String alert;
    private String colormode;
    private String mode;
    private boolean reachable;

    public long getBri() { return bri; }

    public long getCt() { return ct; }

    public String getAlert() { return alert; }

    public String getColormode() { return colormode; }

    public String getMode() { return mode; }

    public void setAlert(String alert) { this.alert = alert; }

    public void setBri(long bri) { this.bri = bri; }

    public void setColormode(String colormode) { this.colormode = colormode; }

    public void setCt(long ct) { this.ct = ct; }

    public void setMode(String mode) { this.mode = mode; }

    public void setOn(boolean on) { this.on = on; }

    public void setReachable(boolean reachable) { this.reachable = reachable; }

}
