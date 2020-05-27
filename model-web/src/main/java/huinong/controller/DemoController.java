package huinong.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

//car maven model
import com.CarImpl;

import java.util.Map;

import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping("/")
public class DemoController {

    @GetMapping("/")
    public String index(ModelMap map) {
        map.put("welcome", "5 YEARS CAR");
        return "index";
    }

    @RequestMapping(value = "/control", method = {RequestMethod.POST, RequestMethod.GET})
    public @ResponseBody
    JSONObject control(@RequestBody Map<String, Object> params) {

        String type = (String) params.get("type");
        int x = (int) params.get("x");
        int y = (int) params.get("y");
        int px = (int) params.get("px");
        int py = (int) params.get("py");
        String orientation = (String) params.get("orientation");
        CarImpl car = new CarImpl(x, y, px, py, orientation);
        try {
            car.move(type);
        } catch (Exception e) {
            JSONObject data = new JSONObject();
            data.put("result", "error");
            JSONObject re = new JSONObject();
            re.put("data", data);
            return re;
        }
        JSONObject re = new JSONObject();
        JSONObject data = new JSONObject();
        data.put("x",car.getPositionX());
        data.put("y",car.getPositionY());
        data.put("orientation", car.getOrientation());
        data.put("result", "success");
        re.put("data", data);
        return re;
//        return "tesst1";
    }


}
