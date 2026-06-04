"use client"

import { Proposal_Board } from "@/components/components_project/proposal_board";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

interface PropostaRequest {
    id: string;
    owner: string;
    estado: string;
    id_prestacao_servico: {
        id_servico: {
            nome: string;
            categoria: {
                id: string;
                icone: string;
            };
        };
    };
}

interface GetAllPropostaData {
    getAllProposta: PropostaRequest[];
}

const dataQuery = gql`
  query GetAllProposta {
    getAllProposta {
      id
      owner
      estado
      id_prestacao_servico {
        id_servico {
          nome
          categoria {
            id
            icone
          }
        }
      }
    }
  }
`;

export default function ProposalPage() {
    const { loading, error, data } = useQuery<GetAllPropostaData>(dataQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const propostas = data?.getAllProposta || [];

    return (
        <div>
            <h1>Home</h1>
            {propostas.map((propostaRequest: PropostaRequest) => (
                <Proposal_Board
                    key={propostaRequest.id}
                    id={propostaRequest.id}
                    estado={propostaRequest.estado}
                    owner={propostaRequest.owner}
                    id_prestacao_servico={propostaRequest.id_prestacao_servico}
                />
            ))}
        </div>
    );
}