package com.jie.baiduai;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @package: com.jie.baiduai
 * @className: BaiDuAiCheck
 * @date: 2022/4/7 17:00
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BaiDuAiCheck {
    //是否合规
    private String conclusion;
}
