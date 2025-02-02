PGDMP          
            |        	   graphs_db    16.0    16.0 (               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    196621 	   graphs_db    DATABASE     |   CREATE DATABASE graphs_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE graphs_db;
                postgres    false            �            1259    196637    arista_entity    TABLE     �   CREATE TABLE public.arista_entity (
    id integer NOT NULL,
    "grafoId" integer NOT NULL,
    "nodoOrigenId" integer NOT NULL,
    "nodoObjetivoId" integer NOT NULL,
    tipo character varying NOT NULL,
    ponderacion integer NOT NULL
);
 !   DROP TABLE public.arista_entity;
       public         heap    postgres    false            �            1259    196636    arista_entity_id_seq    SEQUENCE     �   CREATE SEQUENCE public.arista_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.arista_entity_id_seq;
       public          postgres    false    220                       0    0    arista_entity_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.arista_entity_id_seq OWNED BY public.arista_entity.id;
          public          postgres    false    219            �            1259    196644    ciudad_entity    TABLE     f   CREATE TABLE public.ciudad_entity (
    id integer NOT NULL,
    nombre character varying NOT NULL
);
 !   DROP TABLE public.ciudad_entity;
       public         heap    postgres    false            �            1259    196643    ciudad_entity_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ciudad_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.ciudad_entity_id_seq;
       public          postgres    false    222                       0    0    ciudad_entity_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.ciudad_entity_id_seq OWNED BY public.ciudad_entity.id;
          public          postgres    false    221            �            1259    196630    grafo_entity    TABLE     e   CREATE TABLE public.grafo_entity (
    id integer NOT NULL,
    nombre character varying NOT NULL
);
     DROP TABLE public.grafo_entity;
       public         heap    postgres    false            �            1259    196629    grafo_entity_id_seq    SEQUENCE     �   CREATE SEQUENCE public.grafo_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.grafo_entity_id_seq;
       public          postgres    false    218                       0    0    grafo_entity_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.grafo_entity_id_seq OWNED BY public.grafo_entity.id;
          public          postgres    false    217            �            1259    196623    nodo_entity    TABLE     �   CREATE TABLE public.nodo_entity (
    id integer NOT NULL,
    "ciudadId" integer,
    "grafoId" integer NOT NULL,
    "posicionX" integer NOT NULL,
    "posicionY" integer NOT NULL
);
    DROP TABLE public.nodo_entity;
       public         heap    postgres    false            �            1259    196622    nodo_entity_id_seq    SEQUENCE     �   CREATE SEQUENCE public.nodo_entity_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.nodo_entity_id_seq;
       public          postgres    false    216                       0    0    nodo_entity_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.nodo_entity_id_seq OWNED BY public.nodo_entity.id;
          public          postgres    false    215            a           2604    196640    arista_entity id    DEFAULT     t   ALTER TABLE ONLY public.arista_entity ALTER COLUMN id SET DEFAULT nextval('public.arista_entity_id_seq'::regclass);
 ?   ALTER TABLE public.arista_entity ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            b           2604    196647    ciudad_entity id    DEFAULT     t   ALTER TABLE ONLY public.ciudad_entity ALTER COLUMN id SET DEFAULT nextval('public.ciudad_entity_id_seq'::regclass);
 ?   ALTER TABLE public.ciudad_entity ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            `           2604    196633    grafo_entity id    DEFAULT     r   ALTER TABLE ONLY public.grafo_entity ALTER COLUMN id SET DEFAULT nextval('public.grafo_entity_id_seq'::regclass);
 >   ALTER TABLE public.grafo_entity ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            _           2604    196626    nodo_entity id    DEFAULT     p   ALTER TABLE ONLY public.nodo_entity ALTER COLUMN id SET DEFAULT nextval('public.nodo_entity_id_seq'::regclass);
 =   ALTER TABLE public.nodo_entity ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            
          0    196637    arista_entity 
   TABLE DATA           k   COPY public.arista_entity (id, "grafoId", "nodoOrigenId", "nodoObjetivoId", tipo, ponderacion) FROM stdin;
    public          postgres    false    220   c0                 0    196644    ciudad_entity 
   TABLE DATA           3   COPY public.ciudad_entity (id, nombre) FROM stdin;
    public          postgres    false    222   #1                 0    196630    grafo_entity 
   TABLE DATA           2   COPY public.grafo_entity (id, nombre) FROM stdin;
    public          postgres    false    218   �1                 0    196623    nodo_entity 
   TABLE DATA           Z   COPY public.nodo_entity (id, "ciudadId", "grafoId", "posicionX", "posicionY") FROM stdin;
    public          postgres    false    216   �1                  0    0    arista_entity_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.arista_entity_id_seq', 24, true);
          public          postgres    false    219                       0    0    ciudad_entity_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.ciudad_entity_id_seq', 18, true);
          public          postgres    false    221                       0    0    grafo_entity_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.grafo_entity_id_seq', 2, true);
          public          postgres    false    217                       0    0    nodo_entity_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.nodo_entity_id_seq', 17, true);
          public          postgres    false    215            d           2606    196628 *   nodo_entity PK_24ac2d47ba2e23a63e04bcc7147 
   CONSTRAINT     j   ALTER TABLE ONLY public.nodo_entity
    ADD CONSTRAINT "PK_24ac2d47ba2e23a63e04bcc7147" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.nodo_entity DROP CONSTRAINT "PK_24ac2d47ba2e23a63e04bcc7147";
       public            postgres    false    216            l           2606    196642 ,   arista_entity PK_3e7377882a76abbd78dc57408f4 
   CONSTRAINT     l   ALTER TABLE ONLY public.arista_entity
    ADD CONSTRAINT "PK_3e7377882a76abbd78dc57408f4" PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.arista_entity DROP CONSTRAINT "PK_3e7377882a76abbd78dc57408f4";
       public            postgres    false    220            n           2606    196651 ,   ciudad_entity PK_777b133c802f6e63893e9932898 
   CONSTRAINT     l   ALTER TABLE ONLY public.ciudad_entity
    ADD CONSTRAINT "PK_777b133c802f6e63893e9932898" PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.ciudad_entity DROP CONSTRAINT "PK_777b133c802f6e63893e9932898";
       public            postgres    false    222            h           2606    196635 +   grafo_entity PK_b808354d36487ae53a03362de28 
   CONSTRAINT     k   ALTER TABLE ONLY public.grafo_entity
    ADD CONSTRAINT "PK_b808354d36487ae53a03362de28" PRIMARY KEY (id);
 W   ALTER TABLE ONLY public.grafo_entity DROP CONSTRAINT "PK_b808354d36487ae53a03362de28";
       public            postgres    false    218            p           2606    196653 ,   ciudad_entity UQ_6dc862e983d97ef9088d4cf70b1 
   CONSTRAINT     k   ALTER TABLE ONLY public.ciudad_entity
    ADD CONSTRAINT "UQ_6dc862e983d97ef9088d4cf70b1" UNIQUE (nombre);
 X   ALTER TABLE ONLY public.ciudad_entity DROP CONSTRAINT "UQ_6dc862e983d97ef9088d4cf70b1";
       public            postgres    false    222            j           2606    196657 +   grafo_entity UQ_8eb225ea747ff68207c4ccaef0b 
   CONSTRAINT     j   ALTER TABLE ONLY public.grafo_entity
    ADD CONSTRAINT "UQ_8eb225ea747ff68207c4ccaef0b" UNIQUE (nombre);
 W   ALTER TABLE ONLY public.grafo_entity DROP CONSTRAINT "UQ_8eb225ea747ff68207c4ccaef0b";
       public            postgres    false    218            f           2606    196659 *   nodo_entity UQ_b93b7c7018af454d890228443cd 
   CONSTRAINT     m   ALTER TABLE ONLY public.nodo_entity
    ADD CONSTRAINT "UQ_b93b7c7018af454d890228443cd" UNIQUE ("ciudadId");
 V   ALTER TABLE ONLY public.nodo_entity DROP CONSTRAINT "UQ_b93b7c7018af454d890228443cd";
       public            postgres    false    216            s           2606    196740 ,   arista_entity FK_366bf988405708952a85d23ad64    FK CONSTRAINT     �   ALTER TABLE ONLY public.arista_entity
    ADD CONSTRAINT "FK_366bf988405708952a85d23ad64" FOREIGN KEY ("nodoOrigenId") REFERENCES public.nodo_entity(id) ON DELETE CASCADE;
 X   ALTER TABLE ONLY public.arista_entity DROP CONSTRAINT "FK_366bf988405708952a85d23ad64";
       public          postgres    false    4708    216    220            q           2606    204813 *   nodo_entity FK_4a9e8139f6110e5e72f730db831    FK CONSTRAINT     �   ALTER TABLE ONLY public.nodo_entity
    ADD CONSTRAINT "FK_4a9e8139f6110e5e72f730db831" FOREIGN KEY ("grafoId") REFERENCES public.grafo_entity(id) ON DELETE CASCADE;
 V   ALTER TABLE ONLY public.nodo_entity DROP CONSTRAINT "FK_4a9e8139f6110e5e72f730db831";
       public          postgres    false    216    218    4712            t           2606    196735 ,   arista_entity FK_4c0f1e663c3bee8f2d0817ced0c    FK CONSTRAINT     �   ALTER TABLE ONLY public.arista_entity
    ADD CONSTRAINT "FK_4c0f1e663c3bee8f2d0817ced0c" FOREIGN KEY ("nodoObjetivoId") REFERENCES public.nodo_entity(id) ON DELETE CASCADE;
 X   ALTER TABLE ONLY public.arista_entity DROP CONSTRAINT "FK_4c0f1e663c3bee8f2d0817ced0c";
       public          postgres    false    4708    220    216            u           2606    204818 ,   arista_entity FK_6939a0d663e8ffdccf475525403    FK CONSTRAINT     �   ALTER TABLE ONLY public.arista_entity
    ADD CONSTRAINT "FK_6939a0d663e8ffdccf475525403" FOREIGN KEY ("grafoId") REFERENCES public.grafo_entity(id) ON DELETE CASCADE;
 X   ALTER TABLE ONLY public.arista_entity DROP CONSTRAINT "FK_6939a0d663e8ffdccf475525403";
       public          postgres    false    4712    218    220            r           2606    196670 *   nodo_entity FK_b93b7c7018af454d890228443cd    FK CONSTRAINT     �   ALTER TABLE ONLY public.nodo_entity
    ADD CONSTRAINT "FK_b93b7c7018af454d890228443cd" FOREIGN KEY ("ciudadId") REFERENCES public.ciudad_entity(id);
 V   ALTER TABLE ONLY public.nodo_entity DROP CONSTRAINT "FK_b93b7c7018af454d890228443cd";
       public          postgres    false    216    4718    222            
   �   x�]�9
1�Z:L���1�a�ܿ�<����a�|e�4�~|���zR�� �C#�@�:Y�&��K�ĝN���c��RB[3����V�n2��ݾ��Ɔ�g�m����p����ߓ�W��i�Y�6c��u��k	H�`$�%����S����c��=��qc�/��p�         �   x���
�0ϻO�'�_��QQT<��m��'m��o�LM��!���i�NbH����Wa7���g�-�݌���X�s��g|�[�A��x��]�L?W�5A���1���C�7tA�̏	3� p'�         1   x�3��M,HTHIUpN,*J-I-J,��JRA����ļ�D�=... `�]         V   x����@��v1�5�W/鿎�|i@\./4�M�%�I��߄%��h!6����t�v�2i�#�@�rA�?z�Nl.߇�]�     