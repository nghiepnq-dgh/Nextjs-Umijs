import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Link from "next/link";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
// import styles from "./styles.less";
const useStyles = makeStyles((theme) => ({
  // containerReward: {
  //   display: "flex",
  //   flexDirection: "column",
  // },
  // information: {
  //   display: "flex",
  //   flexDirection: "row",
  //   width: "100%",
  //   justifyContent: center,
  //   padding: "50px 0 50px 0",
  //   background: "#f5f5f5",
  // },
  // left: {
  //   width: "40%",
  //   textAlign: "center",
  // },
}));
const RegisterReferral = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div>
          <img height={400} src="/banner-invite.png" />
        </div>
        <div>
          <div>
            <div>
              <div>
                <CardGiftcardIcon style={{ color: "green", fontSize: 40 }} />
              </div>
              <div>
                <p>
                  Đăng nhập System platform để mời bạn bè của bạn và nhận phần
                  thưởng
                </p>
              </div>
            </div>
            <h4>MỜI BẠN BÈ VÀ NHẬN PHẦN THƯỞNG</h4>
            <p>
              Mời bạn bè tham gia và sử dụng dịch vụ của{" "}
              <span style={{ fontWeight: "bold" }}>System</span> để mình và bạn
              bè cùng được nhận thưởng.
            </p>
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ fontSize: 16, marginRight: 20 }}
              >
                Đăng nhập
              </Button>
              <Link href="register-referral">
                <a>Tôi chưa có tài khoản của hệ thống</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4>NÓ HOẠT ĐỘNG NHƯ THẾ NÀO ?</h4>
          <div>
            <div>
              <p>1</p>
            </div>
            <div>
              <h4>Giới Thiệu</h4>
              <p>
                Giới thiệu với nhiều cách thức khác nhau, chẳng hạn như sử dụng
                Shortlink, Facebook, Linkedin, Zalo Email.
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>2</p>
            </div>
            <div>
              <h4>Nhận Phần Thưởng</h4>
              <p>
                Nhận phần thưởng khi bạn mời bạn bè đăng ký tài khoản và mua
                dịch vụ của.
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>3</p>
            </div>
            <div>
              <h4>Thanh Toán</h4>
              <p>
                Phần thưởng sẽ được thanh toán bằng tiền mặt và chuyển qua ngân
                hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterReferral;
