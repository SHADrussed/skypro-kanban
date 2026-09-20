import { useNavigate } from "react-router-dom";
import {
  CategoriesP,
  CategoriesTheme,
  FormBrowseArea,
  FormBrowseBlock,
  PopBrowseBlock,
  PopBrowseBtnBrowse,
  PopBrowseBtnEdit,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseOverlay,
  PopBrowseStatus,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseWrap,
  PopupButton,
  StatusP,
  StatusTheme,
  StatusThemes,
  Subttl,
  ThemeDown,
} from "./PopBrowse.styled";
import TaskCalendar from "../../TaskCalendar/TaskCalendar";

export default function PopBrowse({ cardId }) {
  const navigate = useNavigate();

  return (
    <PopBrowseOverlay id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <div>
                <PopBrowseTtl>Название задачи</PopBrowseTtl>
                <p>Card ID: {cardId}</p>
              </div>
              <CategoriesTheme $colour="orange" $active $placement="top">
                <p>Web Design</p>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <StatusTheme $hidden>
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme $colour="gray">
                  <p>Нужно сделать</p>
                </StatusTheme>
                <StatusTheme $hidden>
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme $hidden>
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme $hidden>
                  <p>Готово</p>
                </StatusTheme>
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <Subttl htmlFor="textArea01">Описание задачи</Subttl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <TaskCalendar selected />
            </PopBrowseWrap>
            <ThemeDown>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesTheme $colour="orange" $active>
                <p>Web Design</p>
              </CategoriesTheme>
            </ThemeDown>
            <PopBrowseBtnBrowse>
              <div>
                <PopupButton type="button">Редактировать задачу</PopupButton>
                <PopupButton type="button">Удалить задачу</PopupButton>
              </div>
              <PopupButton $filled type="button" onClick={() => navigate("/")}>
                Закрыть
              </PopupButton>
            </PopBrowseBtnBrowse>
            <PopBrowseBtnEdit $hidden>
              <div>
                <PopupButton $filled type="button">Сохранить</PopupButton>
                <PopupButton type="button">Отменить</PopupButton>
                <PopupButton id="btnDelete" type="button">Удалить задачу</PopupButton>
              </div>
              <PopupButton $filled type="button" onClick={() => navigate("/")}>
                Закрыть
              </PopupButton>
            </PopBrowseBtnEdit>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseOverlay>
  );
}
