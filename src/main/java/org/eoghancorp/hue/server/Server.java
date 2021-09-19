package org.eoghancorp.hue.server;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.apache.tomcat.util.digester.DocumentProperties;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.eoghancorp.hue.models.Light;
import org.eoghancorp.hue.models.Lights;
import org.springframework.util.StopWatch;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.Scanner;
import java.util.Map;

@RestController
public class Server {
    @GetMapping("/")
    public Light[] getLights() {
        String apiCreds = getCreds();
        System.out.println(apiCreds);
        // Debug.
        StopWatch watch = new StopWatch();
        watch.start();

        String url = String.format("http://10.0.0.53/api/%s/lights", apiCreds);

        try {
            String phueResponse = createLightRequest(url);
            return DeserializeLights(phueResponse);

        }
        catch(IOException e) {
            System.out.println("an exception occurred");
            System.out.println(e.getMessage());
        }
        System.out.println(url);

        return new Light[] {};
    }

    static String createLightRequest(String phueUrl) throws IOException {
        String lightResponse = "";

        URL url = new URL(phueUrl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        InputStream inStream = conn.getInputStream();

        Scanner scanner = new Scanner(inStream);
        while(scanner.hasNextLine()) {
            lightResponse += scanner.next();
        }

        return lightResponse;
    }

    static Light[] DeserializeLights(String lightResponse) throws JsonProcessingException {
        // TODO: clean this up.
        // Lights are represented by an index, which is not deserializable. Remove this index and convert to JSON array instead.
        lightResponse = lightResponse.replaceAll("\"[\\d]\"[:]", "");
        // Remove the trailing closing bracket at end of string.
        lightResponse = lightResponse.substring(0, lightResponse.length()-1);
        // Wrap the new string in brackets.
        lightResponse = lightResponse = "[" + lightResponse + "]";
        lightResponse = lightResponse.replaceFirst("[{]", "");
        lightResponse = lightResponse.replaceAll("[}]$", "");

        System.out.println(lightResponse);

        ObjectMapper mapper = new ObjectMapper();

        return mapper.readValue(lightResponse, Light[].class);
    }


    static String getCreds() {
        File file = new File("/Users/owenmcpartlan/.creds/phue.txt");

        try {
            Scanner reader = new Scanner(file);
            // only need the first line of the file.
            return reader.next();

        }
        catch (FileNotFoundException e) {
            System.out.println(e);
            return null;
        }
    }

}