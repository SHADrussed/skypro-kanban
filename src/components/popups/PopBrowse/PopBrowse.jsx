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
import { useEffect, useState } from "react";
import { getTask } from "../../../api/api";

export default function PopBrowse({ user, cardId }) {
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  useEffect(() => {
    async function fetchTask() {
      const fetchedTask = await getTask(cardId, user.token);
      setCard(fetchedTask.task);
      console.log(fetchedTask);
    }

    fetchTask();
  }, []);

  if (!card) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <PopBrowseOverlay id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <div>
                <PopBrowseTtl>{card.title}</PopBrowseTtl>
                <p>Card ID: {cardId}</p>
              </div>
              <CategoriesTheme $colour={card.topic} $active $placement="top">
                <p>{card.topic}</p>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                <StatusTheme
                  $hidden={card.status !== "Без статуса"}
                  $colour={card.status === "Без статуса" ? "gray" : ""}
                >
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme
                  $hidden={card.status !== "Нужно сделать"}
                  $colour={card.status === "Нужно сделать" ? "gray" : ""}
                >
                  <p>Нужно сделать</p>
                </StatusTheme>
                <StatusTheme
                  $hidden={card.status !== "В работе"}
                  $colour={card.status === "В работе" ? "gray" : ""}
                >
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme
                  $hidden={card.status !== "Тестирование"}
                  $colour={card.status === "Тестирование" ? "gray" : ""}
                >
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme
                  $hidden={card.status !== "Готово"}
                  $colour={card.status === "Готово" ? "gray" : ""}
                >
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
                    value={card.description}
                    disabled
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <TaskCalendar selected />
            </PopBrowseWrap>
            <ThemeDown>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesTheme $colour={card.topic} $active>
                <p>{card.topic}</p>
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
                <PopupButton $filled type="button">
                  Сохранить
                </PopupButton>
                <PopupButton type="button">Отменить</PopupButton>
                <PopupButton id="btnDelete" type="button">
                  Удалить задачу
                </PopupButton>
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
