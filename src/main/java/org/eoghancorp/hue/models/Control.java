package org.eoghancorp.hue.models;


public class Control {
    private long mindimlevel;
    private long maxlumen;
    private String colorgamuttype;
    private float[][] colorgamut;
    private CT ct;

    public CT getCt() { return ct; }

    public long getMaxlumen() { return maxlumen; }

    public long getMindimlevel() { return mindimlevel; }

    public float[][] getColorgamut() { return colorgamut; }

    public String getColorgamuttype() { return colorgamuttype; }

    public void setMaxlumen(long maxlumen) { this.maxlumen = maxlumen; }

    public void setMindimlevel(long mindimlevel) { this.mindimlevel = mindimlevel; }

    public void setColorgamut(float[][] colorgamut) { this.colorgamut = colorgamut; }

    public void setColorgamuttype(String colorgamuttype) { this.colorgamuttype = colorgamuttype; }

    public void setCt(CT ct) { this.ct = ct; }
}
