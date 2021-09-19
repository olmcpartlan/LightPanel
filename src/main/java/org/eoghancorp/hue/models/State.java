package org.eoghancorp.hue.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class State {
    private boolean on;
    private long bri;
    @JsonIgnore()
    private long hue;
    @JsonIgnore()
    private long sat;
    @JsonIgnore()
    private String effect;
    private long[] xy;
    private long ct;
    private String alert;
    private String colormode;
    private String mode;

    private boolean reachable;

    public boolean isOn() { return on; }

    public boolean isReachable() { return reachable; }

    public long getHue() { return hue; }

    public long getBri() { return bri; }

    public long getCt() { return ct; }

    public String getAlert() { return alert; }

    public String getEffect() { return effect; }

    public void setEffect(String effect) { this.effect = effect; }

    public long[] getXy() { return xy; }

    public void setXy(long[] xy) { this.xy = xy; }

    public String getColormode() { return colormode; }

    public String getMode() { return mode; }

    public long getSat() { return sat; }

    public void setHue(long hue) { this.hue = hue; }

    public void setSat(long sat) { this.sat = sat; }

    public void setAlert(String alert) { this.alert = alert; }

    public void setBri(long bri) { this.bri = bri; }

    public void setColormode(String colormode) { this.colormode = colormode; }

    public void setCt(long ct) { this.ct = ct; }

    public void setMode(String mode) { this.mode = mode; }

    public void setOn(boolean on) { this.on = on; }

    public void setReachable(boolean reachable) { this.reachable = reachable; }

}
