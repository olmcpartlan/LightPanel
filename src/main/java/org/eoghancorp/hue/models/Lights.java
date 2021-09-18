package org.eoghancorp.hue.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Lights {
    @JsonProperty("light")
    private Light[] lights;

    public Light[] getLights() {
        return lights;
    }

    public void setLights(Light[] lights) {
        this.lights = lights;
    }
}