import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
    .iconfont {
      font-size: 26px;
    }
  }
  &.active {
    color: #ea6f5a
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont{
    position: absolute;
    right: 5px;
    bottom 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 180px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder{
    color: #999;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 230px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 180px;
  }
  &.focused {
    width: 230px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  font-size: 14px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writing{
    color: #fff;
    background: #ec6149
  }
`;

