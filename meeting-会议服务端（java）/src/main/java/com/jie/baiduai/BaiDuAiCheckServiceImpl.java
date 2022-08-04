package com.jie.baiduai;

import com.alibaba.fastjson.JSON;
import com.jie.config.BaiDuAiConfig;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@Service
public class BaiDuAiCheckServiceImpl implements BaiDuAiCheckService {
    /**
     *图像审核功能
     *@return
     */
    public  JSONObject checkImg(MultipartFile file) throws IOException {
        byte[] files = FileCopyUtils.copyToByteArray(file.getInputStream());
        JSONObject response = BaiDuAiConfig.client.imageCensorUserDefined(files, null);
        System.out.println(response);
        return response;
    }

    /**
     *文本审核功能
     *@return
     */
    public BaiDuAiCheck checkText(String text){
        // 参数为输入文本
       BaiDuAiCheck baiDuAiCheck = JSON.parseObject(String.valueOf( BaiDuAiConfig.client.textCensorUserDefined(text)), BaiDuAiCheck.class);
        return baiDuAiCheck;
    }
}
