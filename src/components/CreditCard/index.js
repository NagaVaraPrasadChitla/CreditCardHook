// Write your code here
import {useState} from 'react'
import {
  Container,
  MainContainer,
  Heading,
  Horizontal,
  CardContainer,
  AccountNumber,
  Cardholder,
  Sidecard,
  Card,
  Head,
  InputAccountNumber,
  InputAccountName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardPerson, setCardholder] = useState('')
  const getNumber = event => setCardNumber(event.target.value)

  const getName = event => setCardholder(event.target.value)

  return (
    <Container>
      <MainContainer>
        <Heading>CREDIT CARD</Heading>
        <Horizontal />
        <CardContainer data-testid="creditCard">
          <AccountNumber>{cardNumber}</AccountNumber>
          <Cardholder>CARDHOLDER NAME</Cardholder>
          <AccountNumber>{cardPerson}</AccountNumber>
        </CardContainer>
      </MainContainer>
      <Sidecard>
        <Card>
          <Head>Payment Method</Head>
          <InputAccountNumber
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={getNumber}
          />
          <InputAccountName
            type="text"
            placeholder="Cardholder Name"
            value={cardPerson}
            onChange={getName}
          />
        </Card>
      </Sidecard>
    </Container>
  )
}
export default CreditCard
