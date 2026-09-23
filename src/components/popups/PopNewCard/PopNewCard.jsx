import { useNavigate } from "react-router-dom";
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
import { useState } from "react";
import { createTask } from "../../../api/api";

export default function PopNewCard({ user }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");

  async function handleCreateTask() {
    // 1. собрать объект taskData
    const taskData = { title, description, topic };
    // 2. вызвать createTask(taskData, user.token)
    const data = await createTask(taskData, user.token);
    console.log(data);
    // 3. после успешного запроса navigate("/")
    navigate("/");
  }

  return (
    <PopNewCardOverlay id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTtl>Создание задачи</PopNewCardTtl>
            <PopNewCardClose
              as="button"
              type="button"
              onClick={() => navigate("/")}
            >
              &#10006;
            </PopNewCardClose>
            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <Subttl htmlFor="formTitle">Название задачи</Subttl>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <Subttl htmlFor="textArea">Описание задачи</Subttl>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <TaskCalendar />
            </PopNewCardWrap>
            <PopNewCardCategories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                <CategoriesTheme
                  $colour="Web Design"
                  onClick={() => setTopic("Web Design")}
                  $active={topic === "Web Design"}
                >
                  <p>Web Design</p>
                </CategoriesTheme>
                <CategoriesTheme
                  $colour="Research"
                  onClick={() => setTopic("Research")}
                  $active={topic === "Research"}
                >
                  <p>Research</p>
                </CategoriesTheme>
                <CategoriesTheme
                  $colour="Copywriting"
                  onClick={() => setTopic("Copywriting")}
                  $active={topic === "Copywriting"}
                >
                  <p>Copywriting</p>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>
            <FormNewCreate
              id="btnCreate"
              type="button"
              onClick={() => handleCreateTask()}
            >
              Создать задачу
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardOverlay>
  );
}
