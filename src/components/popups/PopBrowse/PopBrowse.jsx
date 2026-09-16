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

export default function PopBrowse() {
  return (
    <PopBrowseOverlay id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTtl>Название задачи</PopBrowseTtl>
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
                <PopupButton>
                  <a href="#">Редактировать задачу</a>
                </PopupButton>
                <PopupButton>
                  <a href="#">Удалить задачу</a>
                </PopupButton>
              </div>
              <PopupButton $filled>
                <a href="#">Закрыть</a>
              </PopupButton>
            </PopBrowseBtnBrowse>
            <PopBrowseBtnEdit $hidden>
              <div>
                <PopupButton $filled>
                  <a href="#">Сохранить</a>
                </PopupButton>
                <PopupButton>
                  <a href="#">Отменить</a>
                </PopupButton>
                <PopupButton id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </PopupButton>
              </div>
              <PopupButton $filled>
                <a href="#">Закрыть</a>
              </PopupButton>
            </PopBrowseBtnEdit>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseOverlay>
  );
}
