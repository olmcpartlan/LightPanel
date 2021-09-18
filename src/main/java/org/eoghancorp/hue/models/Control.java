package org.eoghancorp.hue.models;


public class Control {
    private long mindimlevel;
    private long maxlumen;
    private CT ct;

    public CT getCt() { return ct; }

    public long getMaxlumen() { return maxlumen; }

    public long getMindimlevel() { return mindimlevel; }

    public void setCt(CT ct) { this.ct = ct; }

    public void setMaxlumen(long maxlumen) { this.maxlumen = maxlumen; }

    public void setMindimlevel(long mindimlevel) { this.mindimlevel = mindimlevel; }
}
