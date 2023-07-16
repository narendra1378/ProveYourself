import React from 'react'
import AboutUs from './aboutUs';
import { Container } from 'reactstrap'

export default function Footer() {
  return (
    <>
    <AboutUs/>
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
                Prove YourSelf
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
             Prove YourSelf Team 
        </div>
      </Container>
    </footer>
    </>
  );
}
