import * as React from 'react';
import { Text, View, StyleSheet,Pressable,Modal } from 'react-native';
import {useState} from 'react';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
const [qs,setQs] = useState(0);
const[score,setScore] = useState(0);
const[modal1,setModal1]=useState(true);
const[scoreModal,setScoreModal]=useState(false);

  
const questions=[
 { 
 question: "Example Question",
 answers: ["Option 1","Option 2","Option 3", "Option 4"], 
 correctIndex: 2 
 },
 { 
 question: "Everything is react is a ",
 answers: ["Module","Component","Hooks", "Template"], 
 correctIndex: 1 
 },
 { 
 question: "’1’ + 1 ",
 answers: ["11","1","0", "2"], 
 correctIndex: 0 
 },
 { 
 question: "'5.0' = = = 5 ",
 answers: ["True","False"], 
 correctIndex: 1 
 },
 { 
 question: "Is JavaScript case sensitive language ",
 answers: ["Yes","No"], 
 correctIndex: 0 
 },
 { 
 question: "(['First','Second','Third'].join(' - ')",
 answers: ["First Second Third","First,Second,Third", "First-Second￾Third"], 
 correctIndex: 2 
 } ,
 { 
 question: "How many values are available for flexDirection?",
 answers: ["2","4", "5"], 
 correctIndex: 1 
 },
 { 
 question: "How many built-in hooks are available in react-native?",
 answers: ["2","4", "5", "3"], 
 correctIndex: 2 
 },
 { 
 question: "Which command is used to make a directory git enabled?",
 answers: ["git commit","git init", "git push", "git pull"], 
 correctIndex: 1 
 } ,
 { 
 question: "What is useEffect used for?",
 answers: ["Perform Side Effects","Nothing", "Update UI", "Manage State"], 
 correctIndex: 0 
 },
 { 
 question: "",
 answers: [""],
 correctIndex: "" 
 } ]
function func(ind){
  if(ind==questions[qs].correctIndex){
    setScore(score+1);

  }
  setQs(qs+1);
  if(qs===9){
    setModal1(false)
    setScoreModal(true)
  }

     
}
function closee(){
  
  
  
}
  return (
   
    <View style={styles.container}>
    <Modal visible={modal1}>
    
      <View style={styles.under_cont}>
      <Text>{qs+1}/10</Text>
        <Text style={styles.ques}>{questions[qs].question}</Text>
        <Pressable style={styles.button} onPress={()=>func(0)}>{questions[qs].answers[0]}</Pressable>
        <Pressable style={styles.button} onPress={()=>func(1)}>{questions[qs].answers[1]}</Pressable>
        <Pressable style={styles.button} onPress={()=>func(2)}>{questions[qs].answers[2]}</Pressable>
        <Pressable style={styles.button} onPress={()=>func(3)}>{questions[qs].answers[3]}</Pressable>
        
        

        
      </View>
      </Modal>
      
      <Modal visible={scoreModal}>
      <View style={styles.under_cont}>
      <Text>your total score is : {score}</Text>
      
      
      </View>
      </Modal>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingTop:80,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  under_cont:{
    width:250,
    height:300,
    backgroundColor:'#deb887',
    alignSelf:'center',
    borderRadius:0,

    
    

  },
  ques:{
    marginTop:50,
    marginLeft:20,
  },
  button:{
    marginTop:10,
    borderRadius:8,
    borderColor:'black',
    borderWidth:2,
    marginLeft:20,
    width:180,
    height:30,
    justifyContent:'center',
    alignItems:'center'
  }
});
