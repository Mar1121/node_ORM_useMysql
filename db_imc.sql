/*
 Navicat Premium Data Transfer

 Source Server         : 111
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3307
 Source Schema         : db_imc

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 09/05/2024 17:54:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for imc_staff
-- ----------------------------
DROP TABLE IF EXISTS `imc_staff`;
CREATE TABLE `imc_staff`  (
  `address` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '办公地址',
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '姓名',
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `department` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '部门',
  `status` int(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0 COMMENT '状态 0正在使用 1已删除',
  `isLeader` int(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0 COMMENT '是否是组长 0不是 1是组长',
  `position` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '职位',
  `sex` int(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0 COMMENT '性别0男1女',
  `phone_number` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '手机号',
  `age` int(2) NOT NULL COMMENT '年龄',
  `image_head` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL COMMENT '大头贴图片地址',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `edit_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '编辑时间',
  `delete_time` datetime NULL DEFAULT NULL COMMENT '删除时间',
  `creater` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '创建人',
  `editor` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '编辑人',
  `deleter` varchar(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL COMMENT '删除人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of imc_staff
-- ----------------------------
INSERT INTO `imc_staff` VALUES (' 济南', 'mar', 1, '研发团队', 1, 0, '前端', 0, '13562850362', 24, '0', '2024-05-07 13:48:52', '2024-04-19 17:50:45', '2024-04-22 17:57:33', '111', NULL, 'mar');
INSERT INTO `imc_staff` VALUES ('济南11', '明安瑞11', 2, '研发团队', 0, 0, '前端开发', 0, '13562850362', 23, 'images/测试数据2_1713855064870.png', '2024-04-22 14:26:16', '2024-04-23 14:51:34', '2024-04-22 14:26:16', 'mar', 'mar', NULL);
INSERT INTO `imc_staff` VALUES ('济南', '明安瑞', 3, '研发团队', 0, 0, '前端开发', 0, '13562850362', 23, NULL, '2024-04-22 07:49:49', '2024-04-22 07:49:49', '2024-04-22 07:49:49', 'mar', NULL, NULL);
INSERT INTO `imc_staff` VALUES ('济南', '明安瑞11', 4, '研发团队', 0, 0, '前端开发', 0, '13562850362', 23, 'images/测试数据2_1713857896763.png', '2024-04-22 08:52:26', '2024-04-23 15:38:47', '2024-04-22 08:52:26', 'mar', 'mar', NULL);
INSERT INTO `imc_staff` VALUES ('济南', '明安瑞11', 5, '研发团队', 0, 0, '前端开发', 0, '13562850362', 23, '大头贴路径', '2024-04-22 18:04:15', '2024-04-22 18:04:15', '2024-04-22 18:04:15', 'mar', NULL, NULL);
INSERT INTO `imc_staff` VALUES ('济南', '明安瑞', 6, '研发团队', 0, 0, '前端开发 ', 0, '13562850362', 23, NULL, '2024-04-30 10:57:59', '2024-04-30 10:57:59', '2024-04-30 10:57:59', 'mar', NULL, NULL);
INSERT INTO `imc_staff` VALUES ('32', '32', 7, '233', 0, 0, '323232', 0, '13562850362', 12, NULL, '2024-04-30 10:59:01', '2024-04-30 10:59:01', NULL, 'mar', NULL, NULL);

-- ----------------------------
-- Table structure for imc_user
-- ----------------------------
DROP TABLE IF EXISTS `imc_user`;
CREATE TABLE `imc_user`  (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `username` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `status` int(1) NOT NULL DEFAULT 0 COMMENT '0启用1禁用',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `quit_time` datetime NULL DEFAULT CURRENT_TIMESTAMP COMMENT '退出时间',
  `login_time` datetime NULL DEFAULT NULL COMMENT '登录时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of imc_user
-- ----------------------------
INSERT INTO `imc_user` VALUES (4, 'mar2', '123', 0, '2024-04-18 11:34:03', '2024-04-18 11:34:03', NULL, NULL);
INSERT INTO `imc_user` VALUES (1, 'mar', '123', 0, '2024-04-18 11:19:14', '2024-04-18 11:33:51', NULL, NULL);
INSERT INTO `imc_user` VALUES (5, 'MAR1', '123', 0, '2024-04-18 15:18:23', '2024-04-18 15:18:23', NULL, NULL);
INSERT INTO `imc_user` VALUES (6, 'MAR3', '123456', 0, '2024-04-18 07:18:43', '2024-04-18 07:18:43', NULL, NULL);
INSERT INTO `imc_user` VALUES (7, 'MAR4', '123456', 0, '2024-04-18 15:25:45', '2024-04-18 15:25:45', NULL, NULL);
INSERT INTO `imc_user` VALUES (8, 'mar5', '123', 0, '2024-04-18 18:03:34', '2024-04-18 18:03:34', NULL, NULL);
INSERT INTO `imc_user` VALUES (9, 'hhh111', '123', 0, '2024-04-19 17:04:28', '2024-04-19 17:05:17', NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
