import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="row">
        <span className="txt_info">대표이사 정신아</span>
        <span className="txt_info">사업자 등록 번호 120-81-47521</span>
        <span className="txt_info">
          통신판매업신고번호&nbsp;
          <a className="link_footer" href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208147521" rel="noreferrer" target="_blank">
            제2015-제주아라-0032호
          </a>
        </span>
      </div>

      <div className="row">
        <span className="txt_info">주소 제주특별자치도 제주시 첨단로 242(영평동)</span>
        <span className="txt_info">호스팅사업자 (주)카카오</span>
      </div>

      <div className="row">
        <span className="txt_info">고객센터 1577-3754</span>
        <span className="txt_info">
          이메일&nbsp;
          <a className="link_footer" href="mailto:help.notice@kakaocorp.com">
            help.notice@kakaocorp.com
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
