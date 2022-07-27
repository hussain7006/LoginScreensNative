import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import todoLogo from '../images/todoLogo1.jpg';

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      value: 'break fast',
      edit: false,
    },
    {
      id: 2,
      value: 'lunch',
      edit: false,
    },
    {
      id: 3,
      value: 'dinner',
      edit: false,
    },
  ]);
  // const [todos, setTodos] = useState([]);
  const [userInp, setUserInp] = useState('');
  const [editTodoText, setEditTodoText] = useState('');

  const addNewTodo = () => {
    if (userInp) {
      setTodos([...todos, {value: userInp}]);
      setUserInp('');
    } else {
      alert('Please type your todo first');
    }
  };

  const deleteTodo = index => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const editTodo = (index, value) => {
    setEditTodoText(value);
    let editTodos = todos;
    editTodos[index].edit = true;
    setTodos([...editTodos]);
  };

  const updateTodo = (index, oldTodo) => {
    if (editTodoText) {
      let myTodos = todos;
      myTodos[index].value = editTodoText;
      myTodos[index].edit = false;
      setTodos([...myTodos]);
      setEditTodoText('');
    } else {
      alert('Please type your todo first');
      setEditTodoText(oldTodo);
    }
  };

  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.imgBgDiv}
        // source={todoBg}
        // resizeMode="contain"
      >
        <StatusBar backgroundColor="orange" />
        <View style={styles.top}>
          {/* <View style={styles.header}> */}
          <Image
            source={todoLogo}
            style={styles.logo}
            width={50}
            height={50}></Image>
          <Text style={styles.headerText1}>My</Text>
          <Text style={styles.headerText2}>Todos</Text>
          {/* </View> */}
        </View>
        <View style={styles.middle}>
          {todos.length ? (
            <ScrollView style={styles.scrollView}>
              {todos.map((e, i) => (
                <View key={i}>
                  {!e.edit ? (
                    <View style={styles.liDiv}>
                      <Text style={styles.li}>{e.value}</Text>
                      <View style={styles.buttonsDiv}>
                        <Button
                          title="Edit"
                          style={styles.button}
                          onPress={() => editTodo(i, e.value)}></Button>
                        <Button
                          title="Delete"
                          style={styles.button}
                          onPress={() => deleteTodo(i)}></Button>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.liDiv}>
                      <TextInput
                        key={i}
                        style={styles.updateLi}
                        onChangeText={e => setEditTodoText(e)}>
                        {editTodoText}
                      </TextInput>
                      <View style={styles.updateButtonDiv}>
                        <Button
                          title="Update"
                          style={styles.updatebutton}
                          onPress={() => updateTodo(i, e.value)}></Button>
                      </View>
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>
          ) : (
            <View style={styles.noTodosFoundDiv}>
              <Text style={styles.noTodosFoundText}>No todos found!</Text>
              <Text style={styles.fistTodo}>Please add your first todo</Text>
            </View>
          )}
        </View>
        <View style={styles.bottom}>
          <TextInput
            placeholder="Type your todo"
            value={userInp}
            style={styles.todoUserInp}
            onChangeText={e => setUserInp(e)}></TextInput>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => addNewTodo()}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imgBgDiv: {
    flex: 1,
  },
  top: {
    flex: 0.15,
    // borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {},
  headerText1: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'orange',
  },
  headerText2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'green',
  },
  middle: {
    flex: 1,
    // borderWidth: 2,
  },
  liDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    margin: 3,
    width: '98%',
  },
  li: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  updateLi: {
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: 'bold',
    color: 'darkgrey',
    fontSize: 17,
    height: 42,
    width: '65%',
  },
  scrollView: {
    backgroundColor: '#FBF8F1',
    marginHorizontal: 5,
  },
  buttonsDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 2,
    width: '35%',
    // padding: 2,
  },
  button: {
    margin: 5,
  },
  noTodosFoundDiv: {
    // borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  noTodosFoundText: {
    fontSize: 20,
  },
  fistTodo: {marginTop: 10},
  bottom: {
    flex: 0.16,
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 2,
    // paddingBottom: 5,
  },
  todoUserInp: {
    // height: 60,
    borderTopWidth: 0.5,
    borderColor: 'gray',
    flex: 1,
    fontSize: 20,
  },
  submitButton: {
    flex: 0.3,
    // height: 60,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  submitButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
