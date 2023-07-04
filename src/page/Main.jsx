import ContentBlock from '../components/block/ContentBlock'
import { Empty } from '../components/block/Empty'
import ImageBlock from '../components/block/ImageBlock'
import logo1 from '../assets/app_store_logo.png'
import logo2 from '../assets/pic1.png'
import logo3 from '../assets/pic2.png'
import logo4 from '../assets/pic3.png'
import logo5 from '../assets/pic4.png'
import logo_feader from '../assets/pic_header.png'
import TextBlock from '../components/block/TextBlock'
import Title from '../components/block/Title'
import styles from './styles/Pages.module.scss'
// repeat(6, 1fr)

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.under_header}>
        <div className={styles.under_header__item}>
          <div className={styles.under_header__title}>
            Финансы для бизнеса — приложение для контроля финансов в бизнесе
          </div>
          <div className={styles.under_header__text}>
            Следите за счетами и делайте платежи онлайн
          </div>
          <div className={styles.under_header__logo}>
            <img src={logo1} alt="logo" />
          </div>
        </div>
        <div className={styles.under_header__item_1}>
          <img src={logo_feader} alt="logo_main" />
        </div>
      </div>

      <ContentBlock bg="sky_blue" direction="row" gap={0} gridColumn="1/7">
        <ImageBlock size="normal" radius={true} src={logo2} />
        <TextBlock direction="column">
          <Title size="40px" position="right">
            {' '}
            Оформляйте счета, карты и другие продукты без визита в офис.
          </Title>
        </TextBlock>
      </ContentBlock>

      <ContentBlock bg="sky_blue" direction="row" gap={0} gridColumn="1/7">
        <TextBlock direction="column">
          <Title size="40px" position="right">
            Следите за балансом счетов и операциями.
          </Title>
        </TextBlock>
        <ImageBlock size="normal" radius={true} src={logo3} />
      </ContentBlock>

      <ContentBlock bg="sky_blue" direction="row" gap={0} gridColumn="1/7">
        <ImageBlock size="normal" radius={true} src={logo4} />
        <TextBlock direction="column">
          <Title size="40px" position="right">
            Формируйте выписки по счетам в любом формате.
          </Title>
        </TextBlock>
      </ContentBlock>

      <ContentBlock bg="sky_blue" direction="row" gap={0} gridColumn="1/7">
        <TextBlock direction="column">
          <Title size="40px" position="right">
            Пользуйтесь автозаполнением реквизитов для платежей и переводов.
          </Title>
        </TextBlock>
        <ImageBlock size="normal" radius={true} src={logo5} />
      </ContentBlock>
    </div>
  )
}
