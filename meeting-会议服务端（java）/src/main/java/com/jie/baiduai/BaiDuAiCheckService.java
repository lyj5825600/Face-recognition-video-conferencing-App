package com.jie.baiduai;

import com.alibaba.fastjson.JSON;
import org.json.JSONObject;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface BaiDuAiCheckService {
    //审核图片
    JSONObject checkImg(MultipartFile file) throws IOException;
    //审核文字
    BaiDuAiCheck checkText(String text);
}
