import React from 'react';
import Shaker from '../components/Shaker.js';
// import styled from 'styled-components';

// const HomeContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
// `;

// const Title = styled.h1`
//   font-size: '3rem' : '1rem';

// `;

// const Navbar = styled.div`
//   display: 'flex';
//   aling-items: 'baseline';
//   width: 100%;
// `;

// const NavItem = styled.a`
//   font-size: '1.1rem';
// `;

// export default function Home() {
//   return (
//     <HomeContainer>
//       <Navbar>
//         <Title>Mymy Cocktails</Title>
//         {configs.navs.map((e, index) => (
//           <NavItem key={index} href={e.href}>
//             {e.name}
//           </NavItem>
//         ))}
//       </Navbar>
//     </HomeContainer>
//   );
// }

export default function Home() {
  return (
    <div>
      <Shaker />
    </div>
  );
}
