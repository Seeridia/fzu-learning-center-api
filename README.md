# FZU 学习中心预约 API

> [!IMPORTANT]
>
> 1. 请勿滥用，本项目仅用于学习和测试！
> 2. 部分信息可能是错误（有些字段就是 AI 猜的）的或未经过不同情况的验证，仅供参考。

文档链接：https://api-learning-center.seeridia.top （目前还在施工）

## 预约 addSpaceAppoint

### 请求URL

```
POST https://aiot.fzu.edu.cn/api/ibs/spaceAppoint/app/addSpaceAppoint
```

### 请求头
| 参数名 | 类型   | 必填 | 描述         |
| ------ | ------ | ---- | ------------ |
| token  | string | 是   | 用户认证令牌 |

### 请求参数
| 参数名    | 类型   | 必填 | 描述                         |
| --------- | ------ | ---- | ---------------------------- |
| spaceId   | string | 是   | 座位号                       |
| beginTime | string | 是   | 预约开始时间（格式：HH:mm）  |
| endTime   | string | 是   | 预约结束时间（格式：HH:mm）  |
| date      | string | 是   | 预约日期（格式：YYYY-MM-DD） |

### 响应参数
| 参数名      | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| data        | object | 数据对象（通常为null） |
| dataList    | object | 数据列表（通常为null） |
| pageIndex   | int    | 页码（通常为null）     |
| pageSize    | int    | 每页大小（通常为null） |
| currentPage | int    | 当前页码（通常为null） |
| total       | int    | 总记录数（通常为null） |
| code        | string | 响应代码（通常为0）  |
| msg         | string | 响应消息      |
| otherData   | object | 其他数据（通常为null） |

### 响应示例
```json
{
    "data": null,
    "dataList": null,
    "pageIndex": null,
    "pageSize": null,
    "currentPage": null,
    "total": null,
    "code": "0",
    "msg": "成功",
    "otherData": null
}
```

## 取消预约 revocationAppointApp

### 请求URL
```
POST https://aiot.fzu.edu.cn/api/ibs/spaceAppoint/app/revocationAppointApp
```

### 请求头
| 参数名 | 类型   | 必填 | 描述         |
| ------ | ------ | ---- | ------------ |
| token  | string | 是   | 用户认证令牌 |

### 请求参数
| 参数名 | 类型   | 必填 | 描述         |
| ------ | ------ | ---- | ------------ |
| id     | string | 是   | 预约记录的ID |

### 响应参数
| 参数名      | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| data        | object | 数据对象（通常为null） |
| dataList    | object | 数据列表（通常为null） |
| pageIndex   | int    | 页码（通常为null）     |
| pageSize    | int    | 每页大小（通常为null） |
| currentPage | int    | 当前页码（通常为null） |
| total       | int    | 总记录数（通常为null） |
| code        | string | 响应代码（通常为0）    |
| msg         | string | 响应消息               |
| otherData   | object | 其他数据（通常为null） |

### 响应示例
```json
{
    "data": null,
    "dataList": null,
    "pageIndex": null,
    "pageSize": null,
    "currentPage": null,
    "total": null,
    "code": "0",
    "msg": "成功",
    "otherData": null
}
```

## 获取预约历史 queryMyAppoint

### 请求URL
```
POST https://aiot.fzu.edu.cn/api/ibs/spaceAppoint/app/queryMyAppoint
```

### 请求头
| 参数名 | 类型   | 必填 | 描述         |
| ------ | ------ | ---- | ------------ |
| token  | string | 是   | 用户认证令牌 |


### 请求参数
| 参数名      | 类型   | 必填 | 描述                            |
| ----------- | ------ | ---- | ------------------------------- |
| currentPage | int    | 是   | 当前页码（从1开始）             |
| pageSize    | int    | 是   | 每页显示的记录数量（通常为 10） |
| auditStatus | string | 否   | 审核状态（默认为空）            |
| spaceName   | string | 否   | 空间名称（默认为空）            |

### 响应参数
#### 响应数据结构
| 参数名      | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| data        | object | 数据对象（通常为null） |
| dataList    | array  | 预约记录列表           |
| pageIndex   | int    | 当前页码               |
| pageSize    | int    | 每页数量               |
| currentPage | int    | 最大页码               |
| total       | int    | 总预约记录数           |
| code        | string | 响应代码（0表示成功）  |
| msg         | string | 响应消息               |
| otherData   | object | 其他数据（通常为null） |

#### 预约记录字段说明
| 字段名             | 类型   | 描述                                  |
| ------------------ | ------ | ------------------------------------- |
| id                 | int    | 预约ID                                |
| date               | string | 预约日期（格式：YYYY-MM-DD）          |
| beginTime          | string | 预约开始时间（格式：HH:mm）           |
| endTime            | string | 预约结束时间（格式：HH:mm）           |
| parentId           | object | 父ID（通常为null）                    |
| region             | string | 区域编号                              |
| regionName         | string | 区域名称（通常为学习中心）            |
| floor              | int    | 楼层                                  |
| spaceId            | int    | 座位号                                |
| spaceName          | string | 座位名称                              |
| memo               | object | 备注（通常为null）                    |
| seatSum            | object | 座位总数（通常为null）                |
| seatCode           | string | 座位编码                              |
| applyUser          | string | 申请人编号                            |
| applyHandset       | object | 申请人手机（通常为null）              |
| campusNumber       | string | 申请人学号                            |
| userName           | string | 申请人姓名                            |
| spaceType          | int    | 空间类型                              |
| auditStatus        | int    | 审核状态                              |
| applyTime          | object | 申请时间（通常为null）                |
| auditUser          | object | 审核人（通常为null）                  |
| auditTime          | string | 审核时间（格式：YYYY-MM-DD HH:mm:ss） |
| auditMemo          | object | 审核备注（通常为null）                |
| planUrl            | object | 未知字段（通常为null）                |
| sign               | bool   | 是否签到                              |
| signOut            | object | 签退时间（通常为null）                |
| endAppointmentTime | string | 预约结束时间（格式：HH:mm）           |
| seatNumber         | object | 未知字段（通常为null）                |
| ids                | object | 未知字段（通常为null）                |
| remark             | object | 备注信息（通常为null）                |
| oldId              | object | 未知字段（通常为null）                |
| isUpdate           | object | 未知字段（通常为null）                |

### 响应示例
```json
{
  "data": null,
  "dataList": [
    {
      "id": 858555,
      "date": "2025-02-19",
      "beginTime": "08:00",
      "endTime": "08:30",
      "parentId": null,
      "region": "1",
      "regionName": "学习中心",
      "floor": 4,
      "spaceId": 847,
      "spaceName": "627",
      "memo": null,
      "seatSum": null,
      "seatCode": "4O807",
      "applyUser": "90000",
      "applyHandset": null,
      "campusNumber": "",
      "userName": "",
      "spaceType": 2,
      "auditStatus": 3,
      "applyTime": null,
      "auditUser": null,
      "auditTime": "2025-02-18 20:25:11",
      "auditMemo": null,
      "planUrl": null,
      "sign": false,
      "signOut": null,
      "endAppointmentTime": "08:30",
      "seatNumber": null,
      "ids": null,
      "remark": null,
      "oldId": null,
      "isUpdate": null
    }
  ],
  "pageIndex": 1,
  "pageSize": 10,
  "currentPage": 8,
  "total": 72,
  "code": "0",
  "msg": "成功",
  "otherData": null
}
```

## 查询座位状态 queryStationStatusByTime

### 请求URL
```
POST https://aiot.fzu.edu.cn/api/ibs/spaceAppoint/app/queryStationStatusByTime
```

### 请求头
| 参数名 | 类型   | 必填 | 描述         |
| ------ | ------ | ---- | ------------ |
| token  | string | 是   | 用户认证令牌 |

### 请求参数
| 参数名    | 类型   | 必填 | 描述                                   |
| --------- | ------ | ---- | -------------------------------------- |
| beginTime | string | 是   | 查询开始时间（格式：YYYY-MM-DD HH:mm） |
| endTime   | string | 是   | 查询结束时间（格式：YYYY-MM-DD HH:mm） |
| floorLike | string | 是   | 楼层编号                               |
| parentId  | object | 否   | 父ID（通常为null）                     |
| region    | int    | 是   | 区域编号                               |

### 响应参数
#### 响应数据结构
| 参数名      | 类型   | 描述                   |
| ----------- | ------ | ---------------------- |
| data        | object | 数据对象（通常为null） |
| dataList    | array  | 座位状态列表           |
| pageIndex   | object | 当前页码（通常为null） |
| pageSize    | object | 每页数量（通常为null） |
| currentPage | object | 最大页码（通常为null） |
| total       | object | 总记录数（通常为null） |
| code        | string | 响应代码（0表示成功）  |
| msg         | string | 响应消息               |
| otherData   | object | 其他数据（通常为null） |

#### 座位状态字段说明
| 字段名          | 类型   | 描述                       |
| --------------- | ------ | -------------------------- |
| id              | int    | 座位编号                   |
| spaceCode       | string | 座位编码                   |
| spaceName       | string | **座位号**                 |
| spaceType       | object | 空间类型（通常为null）     |
| parentId        | object | 父ID（通常为null）         |
| plan            | object | 计划信息（通常为null）     |
| planUrl         | object | 计划URL（通常为null）      |
| open            | string | 开放时间（格式：HH:mm）    |
| close           | object | 关闭时间（通常为null）     |
| capacity        | object | 容量（通常为null）         |
| defaultNum      | object | 默认数量（通常为null）     |
| role            | object | 角色（通常为null）         |
| auditRole       | object | 审核角色（通常为null）     |
| device          | object | 设备信息（通常为null）     |
| deviceCode      | object | 设备编码（通常为null）     |
| otherDevice     | object | 其他设备（通常为null）     |
| appoint         | object | 预约信息（通常为null）     |
| qrcode          | object | 二维码信息（通常为null）   |
| floor           | string | 楼层编号                   |
| region          | int    | 区域编号                   |
| automatic       | object | 自动信息（通常为null）     |
| doorId          | object | 门ID（通常为null）         |
| forbidTimeBegin | object | 禁止开始时间（通常为null） |
| forbidTimeEnd   | object | 禁止结束时间（通常为null） |
| appointmentType | object | 预约类型（通常为null）     |
| regionName      | string | 区域名称                   |
| spaceStatus     | int    | 座位状态（0表示可用）      |
| future          | object | 未来信息（通常为null）     |
| total           | object | 总数（通常为null）         |
| seatSum         | object | 座位总数（通常为null）     |
| seatCode        | object | 座位编码（通常为null）     |
| seatVoList      | object | 座位列表（通常为null）     |
| deviceId        | object | 设备ID（通常为null）       |
| deviceList      | object | 设备列表（通常为null）     |

### 响应示例
```json
{
    "data": null,
    "dataList": [
        {
            "id": 294,
            "spaceCode": "4L161",
            "spaceName": "009",
            "spaceType": null,
            "parentId": null,
            "plan": null,
            "planUrl": null,
            "open": "08:00",
            "close": null,
            "capacity": null,
            "defaultNum": null,
            "role": null,
            "auditRole": null,
            "device": null,
            "deviceCode": null,
            "otherDevice": null,
            "appoint": null,
            "qrcode": null,
            "floor": "4",
            "region": 1,
            "automatic": null,
            "doorId": null,
            "forbidTimeBegin": null,
            "forbidTimeEnd": null,
            "appointmentType": null,
            "regionName": "学习中心",
            "spaceStatus": 0,
            "future": null,
            "total": null,
            "seatSum": null,
            "seatCode": null,
            "seatVoList": null,
            "deviceId": null,
            "deviceList": null
        }
    ],
    "pageIndex": null,
    "pageSize": null,
    "currentPage": null,
    "total": null,
    "code": "0",
    "msg": "成功",
    "otherData": null
}
```