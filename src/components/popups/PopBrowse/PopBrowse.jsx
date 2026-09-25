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
import { useContext, useEffect, useState } from "react";
import { getTask } from "../../../services/api";
import { AuthContext } from "../../../contexts/AuthContext";
import { TasksContext } from "../../../contexts/TaskContext";

export default function PopBrowse({ cardId }) {
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  const topics = ["Web Design", "Research", "Copywriting"];

  const { user } = useContext(AuthContext);
  const { removeTask, editTask } = useContext(TasksContext);

  const [card, setCard] = useState(null);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.token) return;

    async function fetchTask() {
      setError("");
      try {
        const fetchedTask = await getTask(cardId, user.token);
        setCard(fetchedTask.task);
        setUpdatedTask(fetchedTask.task);
      } catch (error) {
        if (error.response?.status === 404) {
          setError("Задача не найдена");
        } else if (error.request) {
          setError("Нет соединения с сервером");
        } else {
          setError("Не удалось загрузить задачу");
        }
      }
    }

    fetchTask();
  }, [cardId, user?.token]);

  async function handleDelete() {
    try {
      await removeTask(cardId);
      navigate("/");
    } catch (error) {
      setError("Не удалось удалить задачу");
    }
  }

  function handleCancel() {
    setUpdatedTask(card);
    setIsEditing(false);
  }

  async function handleSave() {
    try {
      await editTask(cardId, updatedTask);

      setCard(updatedTask);
      setIsEditing(false);
    } catch (error) {
      setError("Не удалось изменить задачу");
    }
  }

  if (error) {
    return <h1>{error}</h1>;
  }
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
                {isEditing ? (
                  <input
                    value={updatedTask.title}
                    onChange={(event) =>
                      setUpdatedTask({
                        ...updatedTask,
                        title: event.target.value,
                      })
                    }
                  />
                ) : (
                  <PopBrowseTtl>{card.title}</PopBrowseTtl>
                )}
                <p>Card ID: {cardId}</p>
              </div>
              <CategoriesTheme
                $hidden={isEditing}
                $colour={card.topic}
                $active
                $placement="top"
              >
                <p>{card.topic}</p>
              </CategoriesTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                {statuses.map((status) => (
                  <StatusTheme
                    key={status}
                    $hidden={updatedTask.status !== status && !isEditing}
                    $colour={updatedTask.status === status ? "gray" : ""}
                    onClick={() =>
                      setUpdatedTask({ ...updatedTask, status: status })
                    }
                  >
                    <p>{status}</p>
                  </StatusTheme>
                ))}
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <Subttl htmlFor="textArea01">Описание задачи</Subttl>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                    value={updatedTask.description}
                    disabled={!isEditing}
                    onChange={(event) =>
                      setUpdatedTask({
                        ...updatedTask,
                        description: event.target.value,
                      })
                    }
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <TaskCalendar selected />
            </PopBrowseWrap>
            <ThemeDown $shown={isEditing}>
              <CategoriesP>Категория</CategoriesP>
              {isEditing ? (
                topics.map((topic) => (
                  <CategoriesTheme
                    key={topic}
                    // $hidden={card.topic === topic && isEditing}
                    $active={updatedTask.topic === topic}
                    $colour={topic}
                    onClick={() =>
                      setUpdatedTask({
                        ...updatedTask,
                        topic,
                      })
                    }
                  >
                    <p>{topic}</p>
                  </CategoriesTheme>
                ))
              ) : (
                <CategoriesTheme $colour={card.topic} $active>
                  <p>{card.topic}</p>
                </CategoriesTheme>
              )}
            </ThemeDown>
            <PopBrowseBtnBrowse $hidden={isEditing}>
              <div>
                <PopupButton type="button" onClick={() => setIsEditing(true)}>
                  Редактировать задачу
                </PopupButton>
                <PopupButton type="button" onClick={handleDelete}>
                  Удалить задачу
                </PopupButton>
              </div>
              <PopupButton $filled type="button" onClick={() => navigate("/")}>
                Закрыть
              </PopupButton>
            </PopBrowseBtnBrowse>
            <PopBrowseBtnEdit $hidden={!isEditing}>
              <div>
                <PopupButton $filled type="button" onClick={handleSave}>
                  Сохранить
                </PopupButton>
                <PopupButton type="button" onClick={handleCancel}>
                  Отменить
                </PopupButton>
                <PopupButton
                  id="btnDelete"
                  type="button"
                  onClick={handleDelete}
                >
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
