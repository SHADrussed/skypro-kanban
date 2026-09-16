import {
  CategoriesP,
  CategoriesTheme,
  CategoriesThemes,
  FormNewArea,
  FormNewBlock,
  FormNewCreate,
  FormNewInput,
  PopNewCardBlock,
  PopNewCardCategories,
  PopNewCardClose,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardOverlay,
  PopNewCardTtl,
  PopNewCardWrap,
  Subttl,
} from "./PopNewCard.styled";
import TaskCalendar from "../../TaskCalendar/TaskCalendar";

export default function PopNewCard() {
  return (
    <PopNewCardOverlay id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose href="#">
              &#10006;
            </PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm
                id="formNewCard"
                action="#"
>
                <FormNewBlock>
                  <Subttl htmlFor="formTitle">
                    Название задачи
                  </Subttl>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <Subttl htmlFor="textArea">
                    Описание задачи
                  </Subttl>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <TaskCalendar />
            </PopNewCardWrap>
            <PopNewCardCategories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                <CategoriesTheme $colour="orange" $active>
                  <p>Web Design</p>
                </CategoriesTheme>
                <CategoriesTheme $colour="green">
                  <p>Research</p>
                </CategoriesTheme>
                <CategoriesTheme $colour="purple">
                  <p>Copywriting</p>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreate id="btnCreate">
              Создать задачу
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardOverlay>
  );
}
