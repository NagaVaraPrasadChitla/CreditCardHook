// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const MainContainer = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 40px;
`
export const Heading = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  font-weight: bold;
  color: white;
  font-family: 'Roboto';
`
export const Horizontal = styled.hr`
  background-color: #ffd773;
  width: 30%;
  padding: 1px;
`
export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 80%;
  padding: 70px 40px 40px 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const AccountNumber = styled.p`
  color: white;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const Cardholder = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Roboto';
`
export const Sidecard = styled.div`
  background-color: #d3d9e0;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  height: 40vh;
  width: 90%;
  box-shadow: shadow #c3cad9;
  background-color: #c3cad9;
  padding: 30px 20px 20px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Head = styled.h1`
  color: #475569;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const InputAccountNumber = styled.input`
  width: 60%;
  padding: 20px;
  background-color: white;
  margin-bottom: 20px;
  border-style: none;
  border-radius: 10px;
`
export const InputAccountName = styled.input`
  width: 60%;
  padding: 20px;
  background-color: white;
  border-style: none;
  border-radius: 10px;
`
