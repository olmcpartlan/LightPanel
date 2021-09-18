package org.eoghancorp.hue.models;

public class Config {
    public String archetype;
    public String function;
    public String direction;
    public StartUp startup;

    public StartUp getStartup() { return startup; }

    public String getArchetype() { return archetype; }

    public String getDirection() { return direction; }

    public String getFunction() { return function; }

    public void setArchetype(String archetype) { this.archetype = archetype; }

    public void setDirection(String direction) { this.direction = direction; }

    public void setFunction(String function) { this.function = function; }

    public void setStartup(StartUp startup) { this.startup = startup; }
}


