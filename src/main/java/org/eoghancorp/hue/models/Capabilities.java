package org.eoghancorp.hue.models;

public class Capabilities {
    private boolean certified;
    private Control control;
    private Streaming streaming;
    private Config config;

    public Config getConfig() { return config; }

    public Control getControl() { return control; }

    public Streaming getStreaming() { return streaming; }

    public void setCertified(boolean certified) { this.certified = certified; }

    public void setConfig(Config config) { this.config = config; }

    public void setControl(Control control) { this.control = control; }
}
