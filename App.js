import React, { Component } from 'react';
import { View, Button, Alert , Text} from 'react-native';

export default class App extends Component { 

  render(){

    return(
      
          <View style={{marginHorizontal: 80}}

           style={{width:200, height:100, marginTop:40, marginLeft:80}}>

         <Text>FAMOUS PERSONALITIES</Text>

         <Ambedhkar/>

         <Laxmibai/>

         <Vivekananda/>

         <Bhagat/>

         <Vallabhbhai/>

         <Teresa/>

         <Ramen/>

         <Bose/>

         <Tagore/>

         <Shastri/>

         <Kalam/>

         <Shivaji/>

         <Pandit/>

         </View>
  
    );

  }

}

class Ambedhkar extends Component{

  displayAlert=()=>{

    Alert.alert("Dr. B.R. Ambedkar was the first Indian to complete his Ph.D. in Economics from abroad. He served as        British India’s Minister of Labour in the Viceroy’s Executive Council, as Chairman of the Constituent  Drafting Committee, and as independent India’s first Minister of Law and Justice.")

  }

  render(){

    return(

      <Button color="red" title="DR. BR AMBEDHKAR" onPress={this.displayAlert}/>

    );

  }

}

class Laxmibai extends Component{

  displayAlert=()=>{

    Alert.alert("she is the wife of Maharaja Gangadhar Rao, Lakshmi bai, the Rani of Jhansi, served as Maharani consort of the Maratha princely state of Jhansi from 1843 until 1853. Manikarnika Tambe was the name given to Rani Laxmi Bai, who was also known by the nickname Manu. She was a key figure in the 1857 Indian Rebellion. She was a symbol of rebellion to the British Raj for Indians.")

  }

  render(){

    return(

      <Button color="purple" title="RANI LAXMI BAI" onPress={this.displayAlert}/>

    );

  }

}

class Vivekananda extends Component{

  displayAlert=()=>{

    Alert.alert("Swami Vivekananda was born on 12th January 1863 in Calcutta. He was a very sharp student since his childhood and, was the only student to receive a first-division in the entrance examination of Presidency College.  He loved reading a wide range of subjects like philosophy, religion, history, social science, ancient scriptures like the Vedas, the Upanishads, the Bhagavad Gita, the Ramayana, the Mahabharata, and more, which he then translated into the Bengali language.")

  }

  render(){

    return(

      <Button color="blue" title="SWAMI VIVEKANANDA" onPress={this.displayAlert}/>

    );

  }

}

class Bhagat extends Component{

  displayAlert=()=>{

    Alert.alert("Bhagat Singh was a revolutionary freedom fighter who was hanged by the British at a very prime age. He became a national hero of the Indian liberation struggle against British rule due to his early execution. Many consider him to be one of India’s first Marxists, and he is known as Shaheed Bhagat Singh. ")

  }

  render(){

    return(

      <Button color="yellow" title="BHAGAT SINGH" onPress={this.displayAlert}/>

    );

  }

}

class Vallabhbhai extends Component{

  displayAlert=()=>{

    Alert.alert("The First Deputy Prime Minister of India was Sardar Vallabhbhai Patel. Popularly known as Sadar Patel, he was born on 31st October 1875 in Nadiad, Gujarat. He was greatly influenced by Mahatma Gandhi. Sardar Patel is well-known for the post-independence unification of India.")

  }

  render(){

    return(

      <Button color="green" title="SARDAR VALLABHBHAI PATEL" onPress={this.displayAlert}/>

    );

  }

}

class Teresa extends Component{

  displayAlert=()=>{

    Alert.alert("Long back, a little girl was born in a wealthy family with all the privileges but sacrificing all she chose to serve the poor and the sick. She preached the message of kindness, humanity, empathy, and peace. She was Mother Teresa. Born on 26th August 1910 in Skopje, North Macedonia to a merchant familym, she was a Roman Catholic and her birth name was Anjezë Gonxhe Bojaxhiu.")

  }

  render(){

    return(

      <Button color="pink" title="MOTHER TERESA" onPress={this.displayAlert}/>

    );

  }

}

class Ramen extends Component{

  displayAlert=()=>{

    Alert.alert("Sir Chandrasekhara Venkata Raman was an Indian physicist who was most recognized for his work on light scattering. He is the first Asian to receive a Nobel Prize in Physics for his work on the scattering of light and the discovery of the effect named after him in 1930. Sir C.V. Raman, was born to a Tamil family on 7th November 1888. His father was Chandrasekhara Ramanathan Iyer, and his mother Parvathi Ammal. Since childhood, he was very keen on pursuing science and later became one of the eminent scientists of India.")

  }

  render(){

    return(

      <Button color="violet" title="SIR CV RAMEN" onPress={this.displayAlert}/>

    );

  }

}

class Bose extends Component{

  displayAlert=()=>{

    Alert.alert("Netaji Subhas Chandra Bose a true patriotic personality who fought for his motherland during the time of Independence. He was an Indian nationalist whose fierce patriotism earned him the title of hero in his home country- India.")

  }

  render(){

    return(

      <Button color="orange" title="NETAJI SHUBAS CHANDRA BOSE" onPress={this.displayAlert}/>

    );

  }

}

class Tagore extends Component{

  displayAlert=()=>{

    Alert.alert("Rabindranath Tagore is India’s first noble laureate who has bestowed all the fellow Indians and the people in the world, the art of literature. “Jana Gana Mana” the song written by Tagore is the national song of our country. He was a poet, writer, composer, philosopher, and painter. He was born on 7th May 1861 in Calcutta. He never attended any physical school as his father believed in the theory of “Free flow of education”.")

  }

  render(){

    return(

      <Button color="indigo" title="RABINDRANATH TAGORE" onPress={this.displayAlert}/>

    );

  }

}

class Shastri extends Component{

  displayAlert=()=>{

    Alert.alert("Lal Bahadur Shastri was a statesman from India who served as the country’s second Prime Minister. He advocated for the White Revolution, a nationwide push to boost milk production and supply. He also led the country through warfare and brought peace, earning him the nickname “Man of Peace.” He also believed that farmers are just as essential as soldiers for the country, hence he coined the slogan “Jai Jawan Jai Kisaan.”")

  }

  render(){

    return(

      <Button color="black" title="LAL BAHADUR SHASTRI" onPress={this.displayAlert}/>

    );

  }

}

class Kalam extends Component{

  displayAlert=()=>{

    Alert.alert("Abdul Kalam, commonly called, A.P.J. Abdul Kalam. He was an Indian aerospace scientist who served as the 11th president of India from 2002 to 2007. He was born on 15th October 1931 in Tamil Nadu. His family belonged to a very humble economic background. Through outt his life, Abdul Kalam have always been a bright hardworking student. He graduated in Physics in 1954 and then pursued aerospace engineering from MIT.")

  }

  render(){

    return(

      <Button color="grey" title="APJ ABDUL KALAM" onPress={this.displayAlert}/>

    );

  }

}

class Shivaji extends Component{

  displayAlert=()=>{

    Alert.alert("Shivaji was born on 19 February 1630 in Shivneri. His father Shahji Bhinsle was a general in Deccan Sultanate, and his mother was Jijabai. Those were the days when Mughals used to rule our country. Shivaji and his father served for them. As Shivaji grew older, he and his mother were moved to Pune where he got trained and, educated.")

  }

  render(){

    return(

      <Button color="seagreen" title="CHHATRAPATI SHIVAJI" onPress={this.displayAlert}/>

    );

  }

}

class Pandit extends Component{

  displayAlert=()=>{

    Alert.alert("Pandit Jawaharlal Nehru was the first Prime Minister of India. He was quite popular among children and they called him Chacha Nehru. He was born on 14th November 1889 in Allahabad. In 1912, Nehru attended an annual session of the Indian National Congress in Patna and joined Indian politics. He took an active part in movements like Home Rule Movement, Non-Cooperation Movement, and many more.")

  }

  render(){

    return(

      <Button color="skyblue" title="PANDIT JAWAHARLAL NEHRU" onPress={this.displayAlert}/>

    );

  }

}
