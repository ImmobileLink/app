export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      areaatuacao: {
        Row: {
          idarea: number
          regiao: string | null
        }
        Insert: {
          idarea?: number
          regiao?: string | null
        }
        Update: {
          idarea?: number
          regiao?: string | null
        }
      }
      corporacao: {
        Row: {
          cnpj: string
          criadoem: string | null
          idcorporacao: number
          idusuario: number
          nomefantasia: string
        }
        Insert: {
          cnpj: string
          criadoem?: string | null
          idcorporacao?: number
          idusuario: number
          nomefantasia: string
        }
        Update: {
          cnpj?: string
          criadoem?: string | null
          idcorporacao?: number
          idusuario?: number
          nomefantasia?: string
        }
      }
      corretor: {
        Row: {
          cnpj: string | null
          cpf: string
          criadoem: string
          idcorporacao: number | null
          idcorretor: number
          idusuario: number
          nome: string
        }
        Insert: {
          cnpj?: string | null
          cpf: string
          criadoem?: string
          idcorporacao?: number | null
          idcorretor?: number
          idusuario: number
          nome: string
        }
        Update: {
          cnpj?: string | null
          cpf?: string
          criadoem?: string
          idcorporacao?: number | null
          idcorretor?: number
          idusuario?: number
          nome?: string
        }
      }
      mensagem: {
        Row: {
          dataenvio: string
          iddestinatario: number
          idmensagem: number
          idremetente: number
          mensagem: string
        }
        Insert: {
          dataenvio?: string
          iddestinatario: number
          idmensagem?: number
          idremetente: number
          mensagem: string
        }
        Update: {
          dataenvio?: string
          iddestinatario?: number
          idmensagem?: number
          idremetente?: number
          mensagem?: string
        }
      }
      plano: {
        Row: {
          descricao: string
          duracao: number
          idplano: number
          preco: number
        }
        Insert: {
          descricao: string
          duracao: number
          idplano?: number
          preco: number
        }
        Update: {
          descricao?: string
          duracao?: number
          idplano?: number
          preco?: number
        }
      }
      publicacao: {
        Row: {
          bairro: string | null
          conteudo: string | null
          dataatualizacao: string | null
          datacriacao: string | null
          estado: string | null
          idpublicacao: number
          idusuario: number | null
          img: string | null
          municipio: string | null
          privado: boolean | null
        }
        Insert: {
          bairro?: string | null
          conteudo?: string | null
          dataatualizacao?: string | null
          datacriacao?: string | null
          estado?: string | null
          idpublicacao?: number
          idusuario?: number | null
          img?: string | null
          municipio?: string | null
          privado?: boolean | null
        }
        Update: {
          bairro?: string | null
          conteudo?: string | null
          dataatualizacao?: string | null
          datacriacao?: string | null
          estado?: string | null
          idpublicacao?: number
          idusuario?: number | null
          img?: string | null
          municipio?: string | null
          privado?: boolean | null
        }
      }
      usuario: {
        Row: {
          bairro: string
          celular: string | null
          cep: string
          comercial1: string | null
          comercial2: string | null
          comercial3: string | null
          complemento: string | null
          criadoem: string
          email: string
          estado: string
          idplano: number
          idusuario: number
          metricas: string | null
          numero: string
          rua: string
          senha: string
          situacaocadastral: string
          telefone: string | null
        }
        Insert: {
          bairro: string
          celular?: string | null
          cep: string
          comercial1?: string | null
          comercial2?: string | null
          comercial3?: string | null
          complemento?: string | null
          criadoem?: string
          email: string
          estado: string
          idplano: number
          idusuario?: number
          metricas?: string | null
          numero: string
          rua: string
          senha: string
          situacaocadastral: string
          telefone?: string | null
        }
        Update: {
          bairro?: string
          celular?: string | null
          cep?: string
          comercial1?: string | null
          comercial2?: string | null
          comercial3?: string | null
          complemento?: string | null
          criadoem?: string
          email?: string
          estado?: string
          idplano?: number
          idusuario?: number
          metricas?: string | null
          numero?: string
          rua?: string
          senha?: string
          situacaocadastral?: string
          telefone?: string | null
        }
      }
      usuarioporarea: {
        Row: {
          idarea: number
          idusuario: number
        }
        Insert: {
          idarea: number
          idusuario: number
        }
        Update: {
          idarea?: number
          idusuario?: number
        }
      }
    }
    Views: {
      decrypted_usuario: {
        Row: {
          bairro: string | null
          celular: string | null
          cep: string | null
          comercial1: string | null
          comercial2: string | null
          comercial3: string | null
          complemento: string | null
          criadoem: string | null
          decrypted_senha: string | null
          email: string | null
          estado: string | null
          idplano: number | null
          idusuario: number | null
          metricas: string | null
          numero: string | null
          rua: string | null
          senha: string | null
          situacaocadastral: string | null
          telefone: string | null
        }
        Insert: {
          bairro?: string | null
          celular?: string | null
          cep?: string | null
          comercial1?: string | null
          comercial2?: string | null
          comercial3?: string | null
          complemento?: string | null
          criadoem?: string | null
          decrypted_senha?: never
          email?: string | null
          estado?: string | null
          idplano?: number | null
          idusuario?: number | null
          metricas?: string | null
          numero?: string | null
          rua?: string | null
          senha?: string | null
          situacaocadastral?: string | null
          telefone?: string | null
        }
        Update: {
          bairro?: string | null
          celular?: string | null
          cep?: string | null
          comercial1?: string | null
          comercial2?: string | null
          comercial3?: string | null
          complemento?: string | null
          criadoem?: string | null
          decrypted_senha?: never
          email?: string | null
          estado?: string | null
          idplano?: number | null
          idusuario?: number | null
          metricas?: string | null
          numero?: string | null
          rua?: string | null
          senha?: string | null
          situacaocadastral?: string | null
          telefone?: string | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

