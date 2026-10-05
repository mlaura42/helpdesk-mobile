import { useState } from 'react';

import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  SafeAreaView
} from 'react-native-safe-area-context';

import { Chamado } from '../models/Chamado';

export default function Index() {

  const [titulo, setTitulo] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');

  const [chamados, setChamados] =
    useState<Chamado[]>([]);

  function cadastrarChamado() {

    if (titulo.trim() === '') {
      Alert.alert(
        'Atenção',
        'Informe o título do chamado.'
      );
      return;
    }

    if (descricao.trim() === '') {
      Alert.alert(
        'Atenção',
        'Informe a descrição do chamado.'
      );
      return;
    }

    const novoChamado: Chamado = {
      id: chamados.length + 1,
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      status: 'NOVO'
    };

    setChamados(chamadosAtuais => [...chamadosAtuais,
      novoChamado
    ]);

    setTitulo('');
    setDescricao('');

    Alert.alert(
      'Sucesso',
      `Chamado ${novoChamado.id} cadastrado com sucesso.`
    );
  }

  return (
    <SafeAreaView style={estilos.container}>

      <ScrollView>

        <View style={estilos.cabecalho}>

          <Text style={estilos.titulo}>
            HelpDesk
          </Text>

          <Text style={estilos.subtitulo}>
            Gerenciamento de chamados de TI
          </Text>

        </View>

        <View style={estilos.conteudo}>

          <Text style={estilos.tituloSecao}>
            Novo chamado
          </Text>

          <Text style={estilos.rotulo}>
            Título
          </Text>

          <TextInput
            style={estilos.campo}
            placeholder="Ex.: Computador não liga"
            value={titulo}
            onChangeText={setTitulo}
          />

          <Text style={estilos.rotulo}>
            Descrição
          </Text>

          <TextInput
            style={[
              estilos.campo,
              estilos.campoDescricao
            ]}
            placeholder="Descreva o problema encontrado"
            value={descricao}
            onChangeText={setDescricao}
            multiline
          />

          <Pressable
            style={estilos.botao}
            onPress={cadastrarChamado}
          >

            <Text style={estilos.textoBotao}>
              Cadastrar chamado
            </Text>

          </Pressable>

          <Text style={estilos.quantidade}>
            Chamados cadastrados: {chamados.length}
          </Text>

          <View style={estilos.lista}>
            {chamados.map(chamado => (
              <View
                key={chamado.id}
                style={estilos.cardChamado}
              >

                <Text style={estilos.tituloChamado}>
                  {chamado.titulo}
                </Text>

                <Text style={estilos.descricaoChamado}>
                  {chamado.descricao}
                </Text>

                <Text style={estilos.statusChamado}>
                  {chamado.status}
                </Text>

              </View>

            ))}

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f6f8'
  },

  cabecalho: {
    backgroundColor: '#1f2937',
    padding: 24
  },

  titulo: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold'
  },

  subtitulo: {
    color: '#d1d5db',
    marginTop: 4,
    fontSize: 15
  },

  conteudo: {
    padding: 24
  },

  tituloSecao: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },

  rotulo: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6
  },

  campo: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },

  campoDescricao: {
    height: 100,
    textAlignVertical: 'top'
  },

  botao: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  quantidade: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '600'
  },

  lista: {
    marginTop: 20
  },

  cardChamado: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12
  },

  tituloChamado: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  descricaoChamado: {
    fontSize: 15,
    marginTop: 6
  },

  statusChamado: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'bold'
  }

});
