import styled from '@emotion/styled';
import { rem } from 'polished';

function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="container">
        <div className="logo">
          <img src="/images/inventory-logo.png" alt="Logo" />
          <span className="logo-text">Grandpa Inventory</span>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: ${(props) =>
    props.isDark ? props.theme.colors.primary : props.theme.colors.secondary};
  padding: 20px;
  .logo {
    display: flex;
    align-items: center;
    .logo-text {
      color: #333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;

export default Header;
