(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{503:function(t,a,_){"use strict";_.r(a);var e=_(30),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"raft论文-中文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#raft论文-中文"}},[t._v("#")]),t._v(" Raft论文-中文")]),t._v(" "),_("h2",{attrs:{id:"摘要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[t._v("#")]),t._v(" 摘要")]),t._v(" "),_("p",[t._v("​\t\tRaft是一种用于管理复制日志的共识算法。它产生了与( multi- ) Paxos等价的结果，并且它与Paxos一样高效，但是它的结构与Paxos不同；这使得Raft比Paxos更易于理解，也为构建实际系统提供了更好的基础。为了增强可理解性，Raft分离了领导人选举、日志复制和安全等共识的关键要素，并强制要求更强的一致性以减少必须考虑的国家数量。用户研究的结果表明，Raft比Paxos更容易让学生学习。Raft还包括一个用于更改群集成员资格的新机制，该机制使用重叠多数来保证安全性。")]),t._v(" "),_("h2",{attrs:{id:"_1、引言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、引言"}},[t._v("#")]),t._v(" 1、引言")]),t._v(" "),_("p",[t._v("​\t\t共识算法允许机器集合作为一个连贯的群体工作，能够在其部分成员的失败中生存下来。正因为如此，它们在构建可靠的大规模软件系统方面发挥着关键作用。在过去的十年中，Paxos [ 15、16]主导了共识算法的讨论：大多数共识的实现都是基于Paxos或受其影响，并且Paxos已经成为用于教学生共识的主要工具。")]),t._v(" "),_("p",[t._v("​\t\t遗憾的是，尽管Paxos试图让自己变得更加平易近人，但却很难理解。此外，其架构需要复杂的变化来支持实际系统。结果，无论是系统建设者还是学生，都在与Paxos斗争。")]),t._v(" "),_("p",[t._v("​\t\t经过与Paxos本人的斗争，我们开始寻找一种新的共识算法，为系统构建和教育提供更好的基础。我们的方法是不寻常的，因为我们的主要目标是可理解性：我们可以为实际系统定义一个共识算法，并以一种比Paxos更容易学习的方式来描述它?此外，我们希望该算法能够促进对系统构建者至关重要的直觉的开发。重要的不仅是算法能起作用，更重要的是要看它为什么能起作用。")]),t._v(" "),_("p",[t._v("​\t\t这项工作的结果是一个称为Raft的共识算法。在Raft的设计中，我们使用了特定的技术来提高可理解性，包括分解( Raft分离了领导者选举、日志复制和安全性)和状态空间缩减(相对于Paxos , Raft降低了非确定性的程度,服务器之间的方式可以不一致)。一项针对两所大学43名学生的用户研究表明，Raft明显比Paxos更容易理解：在学习了两种算法后，这些学生中有33人能够比Paxos更好地回答关于Raft的问题。")]),t._v(" "),_("p",[t._v('​\t\tRaft在很多方面与现有的一致性算法(最引人注目的是Oki和Liskov [ 29 , 22 ]提出的"视图打印复制")类似，但它有几个新颖的特点：')]),t._v(" "),_("ul",[_("li",[t._v("强领导者：Raft使用了比其他共识算法更强的领导形式。例如，日志条目仅从领导者流向其他服务器。这样简化了复制日志的管理，使Raft更容易理解。")]),t._v(" "),_("li",[t._v("领导人选举：Raft使用随机计时器选举领导人。这只在任何共识算法已经需要的心跳中添加少量的机制，同时简单快速地解决冲突。")]),t._v(" "),_("li",[t._v("成员身份变更：Raft在集群中更改服务器集合的机制使用了一种新的联合共识方法，其中两种不同配置的多数在转换期间重叠。这使得集群在配置变化期间能够继续正常运行。")])]),t._v(" "),_("p",[t._v("我们认为，Raft优于Paxos和其他共识算法，无论是出于教育目的，还是作为实现的基础。它比其他算法更简单、更容易理解；它被完全描述，足以满足实际系统的需要；它有多个开源实现，被多个公司使用；其安全特性已被正式规定和证明；而且其效率与其他算法相当。")]),t._v(" "),_("p",[t._v("​\t\t文章的后半部分介绍了复制状态机问题(第2节)，讨论了Paxos的优点和缺点(第3节)，描述了可理解性的一般方法(第4节)，介绍了Raft共识算法(第5 ~ 8节)，评估了Raft (第9节)，并讨论了相关工作(第10节)。")]),t._v(" "),_("h2",{attrs:{id:"_2、复制状态机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、复制状态机"}},[t._v("#")]),t._v(" 2、复制状态机")]),t._v(" "),_("p",[t._v("​\t\t一致性算法通常出现在复制状态机的环境中[ 37 ]。在这种方法中，服务器集合上的状态机计算相同状态的相同副本，即使部分服务器宕机也可以继续运行。复制状态机用于解决分布式系统中的各种容错问题。例如，具有单个集群领导者的大型系统，如GFS [ 8 ]，HDFS [ 38 ]和内存云[ 33 ]，通常使用单独复制的状态机来管理领导者选举，并存储必须在领导者崩溃时存活的配置信息。复制状态机的例子包括Chubby [ 2 ]和ZooKeeper [ 11 ]。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218150739228.png",alt:"image-20231218150739228"}})]),t._v(" "),_("p",[t._v("​\t\t复制状态机通常使用复制日志实现，如图1所示。每个服务器存储一个包含一系列命令的日志，其状态机按顺序执行这些命令。每个日志中包含的命令顺序相同，因此每个状态机处理相同的命令序列。由于状态机是确定性的，每个状态机计算相同的状态和相同的输出序列。")]),t._v(" "),_("p",[t._v("​\t\t保持复制日志的一致性是共识算法的工作。服务器上的共识模块接收来自客户端的命令并将其添加到日志中。它与其他服务器上的共识模块进行通信，以确保每个日志最终以相同的顺序包含相同的请求，即使某些服务器发生故障。一旦命令被正确复制，每个服务器的状态机按日志顺序处理，并将输出返回给客户端。因此，服务器似乎形成了一个单一的、高度可靠的状态机。")]),t._v(" "),_("p",[t._v("用于实际系统的共识算法通常具有以下属性：")]),t._v(" "),_("ul",[_("li",[t._v("它们确保了所有非拜占庭条件下的安全(从不返回错误的结果)，包括网络延迟、分区和数据包丢失、重复和重新排序。")]),t._v(" "),_("li",[t._v("只要任何大多数服务器都可以运行，并且可以相互通信和与客户端通信，它们都是功能齐全的(可用的)。因此，一个典型的五台服务器集群可以容忍任意两台服务器的故障。假设服务器停机导致失败；它们稍后可以从稳定存储上的状态恢复并重新加入集群。")]),t._v(" "),_("li",[t._v("它们不依赖于时序来确保日志的一致性：错误的时钟和极端的消息延迟在最坏的情况下会导致可用性问题。")]),t._v(" "),_("li",[t._v("在常见的情况下，只要大部分集群响应了单轮远程过程调用，一个命令就可以完成；少数慢速服务器不必影响系统整体性能。")])]),t._v(" "),_("h2",{attrs:{id:"_3、paxos怎么了"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、paxos怎么了"}},[t._v("#")]),t._v(" 3、Paxos怎么了?")]),t._v(" "),_("p",[t._v("​\t\t在过去的十年中，莱斯利·兰伯特的Paxos协议[ 15 ]几乎成为共识的代名词：它是课程中最常教授的协议，共识的大多数实现都以它为起点。Paxos首先定义了一个能够就单个决策达成一致的协议，比如单个复制日志条目。我们把这个子集称为单序Paxos。然后Paxos将该协议的多个实例进行组合以方便日志( multi-Paxos )等一系列决策。Paxos既保证了安全性又保证了活性，并且支持簇成员的变化。其正确性已被证明，并且在正常情况下是有效的。")]),t._v(" "),_("p",[t._v("​\t\t遗憾的是，Paxos有两个重大缺陷。第一个缺点是Paxos非常难以理解。完整的解释[ 15 ]是出了名的不透明；很少有人成功地理解它，并且只有付出巨大的努力。因此，有几次尝试用更简单的术语[ 16、20、21]来解释Paxos。这些解释聚焦于单一政令子集，但仍具有挑战性。在NSDI2012对与会者的非正式调查中，我们发现即使在经验丰富的研究人员中，也很少有人对Paxos感到满意。我们与Paxos自己进行了斗争；直到阅读了几个简化的解释并设计了我们自己的替代方案后，我们才能够理解完整的协议，这个过程花费了近一年的时间。")]),t._v(" "),_("p",[t._v("​\t\t我们假设Paxos的不透明性源于其选择单令子集作为基础。单律令Paxos是密集而微妙的：它分为两个阶段，没有简单直观的解释，无法独立理解。正因为如此，很难形成关于单一法令协议为什么有效的直觉。多Paxos的组合规则增加了额外的复杂性和微妙性。我们认为，多元决策共识的整体问题(即,一个日志而不是单个条目)可以通过其他更为直接和明显的方式进行分解。")]),t._v(" "),_("p",[t._v("​\t\tPaxos的第二个问题是它没有为构建实际的实现提供良好的基础。其中一个原因是，对于多Paxos并没有一个被广泛认同的算法。兰波特的描述多是关于单令Paxos的；他勾勒了多Paxos的可能途径，但遗漏了许多细节。对Paxos进行充实和优化的尝试已有数次，如[ 26 ]、[ 39 ]、[ 13 ]等，但彼此之间以及与兰波特的草图有所不同。类似Chubby [ 4 ]的系统已经实现了类Paxos算法，但在大多数情况下，它们的细节还没有公布。")]),t._v(" "),_("p",[t._v("​\t\t此外，Paxos架构对于构建实际系统来说是一个很差的架构；这是单一政令分解的另一个后果。例如，独立地选择日志条目的集合，然后将它们融合成一个顺序日志的方法几乎没有好处；这只是增加了复杂性。以日志为中心设计系统，以约束的顺序依次追加新条目，更简单、更高效。另一个问题是，Paxos在其核心(尽管它最终暗示了一种作为绩效优化的弱领导形式)处使用了对称对等方法。这在一个简化的世界里很有意义，那里只会做出一个决定，但很少有实际系统使用这种方法。如果必须进行一系列的决策，则比较简单和快速")]),t._v(" "),_("p",[t._v("​\t\t因此，实际系统与Paxos几乎没有相似之处。每一次实现都从Paxos开始，发现实现的困难，然后发展出明显不同的架构。这既费时又容易出错，理解Paxos语的困难又加剧了问题。Paxos的公式对于证明其正确性的定理可能是一个很好的公式，但实际实现与Paxos的公式差别太大，证明价值不大。下面Chubby实施者的评论是典型的：")]),t._v(" "),_("blockquote",[_("p",[t._v("Paxos算法的描述与现实世界系统的需求之间存在显著差距.. ..最终的系统将基于一个未经证明的协议[ 4 ]。")])]),t._v(" "),_("p",[t._v("​\t\t正因为这些问题，我们得出结论，Paxos无论是在制度建设方面，还是在教育方面，都没有提供良好的基础。鉴于共识在大规模软件系统中的重要性，我们决定看看能否设计出一种性能优于Paxos的替代共识算法。Raft就是该实验的结果。")]),t._v(" "),_("h2",{attrs:{id:"_4、为可理解性而设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、为可理解性而设计"}},[t._v("#")]),t._v(" 4、为可理解性而设计")]),t._v(" "),_("p",[t._v("​\t\t我们在设计Raft时有几个目标：它必须为系统构建提供一个完整且实用的基础，这样它就大大减少了开发人员所需的设计工作量；它必须在所有条件下都是安全的，并在典型的操作条件下可用；而且它必须对常见操作高效。但我们最重要的目标- -也是最困难的挑战- -是可理解性。必须有可能让广大受众能够舒服地理解算法。此外，必须能够开发关于算法的直觉，以便系统构建者能够做出在现实世界实现中不可避免的扩展。")]),t._v(" "),_("p",[t._v("​\t\t在Raft的设计中有许多要点，我们必须在备选方法中进行选择。在这些情况下，我们评估了基于可理解性的备选方案：解释每个备选方案(例如,它的状态空间有多复杂,它是否有微妙的含义?)有多困难，以及读者完全理解该方法及其含义有多容易?")]),t._v(" "),_("p",[t._v("​\t\t我们认识到这样的分析存在高度的主观性；尽管如此，我们使用了两种普遍适用的技术。第一种技术是众所周知的问题分解方法：在可能的情况下，我们将问题分解为可以相对独立地解决、解释和理解的独立部分。例如，在Raft中，我们分离了领导者选举、日志复制、安全性和成员资格更改。")]),t._v(" "),_("p",[t._v("​\t\t我们的第二种方法是通过减少要考虑的状态数来简化状态空间，使系统更加连贯，并在可能的情况下消除不确定性。具体来说，日志不允许有漏洞，Raft限制了日志之间不一致的方式。虽然在大多数情况下，我们试图消除非决定论，有些情况下，非决定论实际上提高了可理解性。特别地，随机方法引入了非决定论，但它们倾向于通过以类似( '选一个;它不重要')的方式处理所有可能的选择来减少状态空间。我们使用随机化来简化Raft领导人选举算法。")]),t._v(" "),_("h2",{attrs:{id:"_5、raft共识算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、raft共识算法"}},[t._v("#")]),t._v(" 5、Raft共识算法")]),t._v(" "),_("p",[t._v("​\t\tRaft是用于管理第2节所述表单的复制日志的算法。图2以浓缩形式对算法进行了总结以供参考，图3列出了算法的关键性质；这些图形的元素在本节的其余部分逐段讨论。")]),t._v(" "),_("p",[t._v("​\t\tRaft通过首先选出一位杰出的领导者，然后让领导者完全负责管理复制日志来实现共识。领导者接受来自客户端的日志项，在其他服务器上复制它们，并告诉服务器何时可以安全地将日志项应用到它们的状态机。拥有一个领导者可以简化复制日志的管理。例如，领导者可以在不咨询其他服务器的情况下决定在日志中放置新条目的位置，并且数据以简单的方式从领导者流向其他服务器。一个领导者可以失败或与其他服务器断开连接，在这种情况下，一个新的领导者被选举出来。")]),t._v(" "),_("p",[t._v("考虑到领导者方法，Raft将共识问题分解为三个相对独立的子问题，在接下来的小节中讨论：")]),t._v(" "),_("ul",[_("li",[t._v("领导人选举：当现有领导人失败时，必须选择新的领导人( 5.2节)。")]),t._v(" "),_("li",[t._v("日志复制：领导者必须接受来自客户端的日志条目，并在集群中复制它们，迫使其他日志与自己的日志一致(第5.3节)。")]),t._v(" "),_("li",[t._v("安全性：Raft的关键安全属性是状态机安全属性( State Machine Safety Property )，如图3所示：如果任何服务器对其状态机应用了特定的日志项，那么任何其他服务器都不可能对相同的日志索引应用不同的命令。第5.4节描述了Raft如何保证这个属性；解决方案涉及对5.2节所述选举机制的额外限制。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218151744620.png",alt:"image-20231218151744620"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218151812398.png",alt:"image-20231218151812398"}})]),t._v(" "),_("p",[t._v("在给出共识算法之后，本节讨论了可用性问题以及时序在系统中的作用。")]),t._v(" "),_("h3",{attrs:{id:"_5-1、raft基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、raft基础"}},[t._v("#")]),t._v(" 5.1、Raft基础")]),t._v(" "),_("p",[t._v("​\t\t一个Raft集群包含多个服务器；五是一个典型的数字，它允许系统容忍两个故障。在任何给定的时间，每个服务器都处于三种状态之一：领导者、跟随者或候选者。在正常操作中，只有一个领导者，所有其他服务器都是跟随者。追随者是被动的：他们自己不提出任何要求，而只是回应领导人和候选人的要求。领导者处理所有客户端请求(如果一个客户端联系一个跟随者,那么跟随者将其重定向到领导者)。第三个状态，候选人，用于选举一个新的领导者，如5.2节所述。图4给出了状态及其转换；下面讨论这些转变。")]),t._v(" "),_("p",[t._v("​\t\tRaft将时间划分为任意长度的任期，如图5所示。任期用连续的整数编号。每个任期都始于选举，在选举中，一个或多个候选人试图成为领导者，如第5.2节所述。如果一个候选人在选举中获胜，那么它将在剩下的任期内担任领导者。在某些情况下，选举会导致分裂投票。在这种情况下，任期将以没有领导人而结束，一个新的任期(伴随着一场新的选举)马上开始。Raft保证了给定任期内至多有一个领导者。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218152106485.png",alt:"image-20231218152106485"}})]),t._v(" "),_("p",[t._v("​\t\t不同的服务器可能会在不同的时间观察到任期之间的转换，在某些情况下，服务器可能不会观察到选举甚至整个任期。任期在Raft中充当逻辑时钟[ 14 ]，它们允许服务器检测过时的信息，如过时的领导者。每个服务器存储一个当前任期编号，该编号随时间单调递增。当服务器进行通信时，交换当前任期；如果一个服务器的当前任期小于另一个服务器的当前任期，则更新其当前任期为较大值。如果候选人或领导人发现自己的任期已经过时，立即恢复到追随者状态。如果服务器接收到一个具有陈旧任期的请求，则拒绝该请求。")]),t._v(" "),_("p",[t._v("​\t\tRaft服务器使用远程过程调用( Remote Procedure Call，RPC )进行通信，而基本共识算法只需要两种类型的RPC。RequestVote RPC由候选人在选举期间发起( 5.2节)，AppendEntries RPC由领导人发起以复制日志条目并提供心跳形式( 5.3节)。第7节增加了第3个RPC，用于在服务器之间传递快照。如果服务器没有及时收到响应，则重试RPC，并并行发出RPC以获得最佳性能。")]),t._v(" "),_("h3",{attrs:{id:"_5-2、首领选举"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、首领选举"}},[t._v("#")]),t._v(" 5.2、首领选举")]),t._v(" "),_("p",[t._v("​\t\tRaft使用心跳机制触发领导人选举。当服务器启动时，它们以跟随者的身份开始。只要服务器从领导者或候选者那里接收到有效的RPC，它就一直处于跟随者状态。领导者为了维护自己的权威，向所有追随者发送周期性心跳(不带日志项的RPC)。如果一个追随者在一段时间内没有收到任何通信，称为选举超时，那么它假设没有可行的领导者，并开始选举以选择新的领导者。")]),t._v(" "),_("p",[t._v("​\t\t为了开始选举，追随者增加当前任期并过渡到候选者。然后，它自己投票，并在集群中的每个其他服务器上并行地发出RequestVote RPC。一个候选人继续处于这种状态，直到发生三件事中的一件：( a )它赢得选举，( b )另一个服务器建立自己作为领导者，或( c )一段时间过去没有赢家。这些结果在下面的段落中分别讨论。")]),t._v(" "),_("p",[t._v("​\t\t如果候选人在同一任期内从整个集群中的大多数服务器获得选票，则该候选人赢得选举。每个服务器在给定任期内最多投票给一个候选人，先到先得(注:第5.4节增加了对投票的额外限制)。多数票规则保证了至少有一名候选人能够赢得特定任期(图3中的选举安全属性)的选举。一旦候选人赢得选举，他就会成为领导者。然后，它向所有其他服务器发送心跳消息，以建立其权威并防止新的选举。")]),t._v(" "),_("p",[t._v("​\t\t在等待投票时，候选人可能会从另一个声称是领导者的服务器收到一个AppendEntries RPC。如果领导者的任期(包含在其RPC中)至少与候选人的当前任期一样大，那么候选人承认领导者是合法的，并返回到追随者状态。如果RPC中的项小于候选人当前的项，则该候选人拒绝RPC，继续处于候选状态。")]),t._v(" "),_("p",[t._v("​\t\t第三种可能的结果是，一个候选人既没有赢得选举，也没有输掉选举：如果许多追随者同时成为候选人，那么就可以分割选票，从而没有候选人获得多数。当这种情况发生时，每个候选人将超时并通过增加其任期和启动另一轮RequestVote RPCs来启动新的选举。然而，如果没有额外的措施，分裂投票可以无限期地重复。")]),t._v(" "),_("p",[t._v("​\t\tRaft使用随机的选举超时，以确保分裂投票是罕见的，并迅速解决。为了防止首先出现分裂投票，选举超时从固定间隔(如150 ~ 300ms)中随机选择。这样分散了服务器，以至于在大多数情况下只有单个服务器会超时；它赢得选举并在任何其他服务器超时之前发送心跳。同样的机制用于处理分裂投票。每个候选人在选举开始时重新启动其随机选举超时，并在开始下一次选举之前等待该超时结束；这降低了在新的选举中出现另一次分裂投票的可能性。第9.3节表明，这种方式可以快速选举出领导人。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218152350007.png",alt:"image-20231218152350007"}})]),t._v(" "),_("p",[t._v("​\t\t选举是可理解性如何指导我们在设计方案之间进行选择的一个例子。最初我们计划使用一个排名系统：每个候选人被分配一个独特的排名，用于在竞争候选人之间进行选择。如果一个候选人发现了另一个排名较高的候选人，那么它就会回到追随者状态，这样排名较高的候选人就更容易赢得下一次选举。我们发现，这种方法在可用性(如果排名较高的服务器出现故障,排名较低的服务器可能需要超时并重新成为候选人,但如果超时太快,则可以重启选举领导人的进程)附近产生了微妙的问题。我们对算法进行了多次调整，但每次调整后都会出现新的拐角情况。最终我们得出结论，随机重试的方法更明显，也更容易理解。")]),t._v(" "),_("h3",{attrs:{id:"_5-3、日志复制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-3、日志复制"}},[t._v("#")]),t._v(" 5.3、日志复制")]),t._v(" "),_("p",[t._v("​\t\t一旦一个领导者当选，它就开始为客户请求提供服务。每个客户端请求都包含一个命令，由复制的状态机执行。领导者将命令追加到日志中作为新的条目，然后在其他服务器上并行地发出AppendEntries RPC来复制条目。当条目被安全地复制(如下所述)时，领导者将该条目应用于其状态机，并将执行结果返回给客户机。如果跟随者崩溃或运行缓慢，或者网络数据包丢失，领导者无限期地重试AppendEntries RPCs (即使在回应了委托人之后)，直到所有跟随者最终存储所有日志条目。")]),t._v(" "),_("p",[t._v("​\t\t日志整理如图6所示。每个日志条目存储一个状态机命令以及条目被领导接收时的任期编号。日志条目中的任期编号用于检测日志之间的不一致，并确保图3中的一些属性。每个日志条目也有一个整数索引标识其在日志中的位置。")]),t._v(" "),_("p",[t._v("​\t\t领导者决定何时向状态机申请日志条目是安全的；这样的条目被称为承诺。Raft保证提交的条目是持久的，最终将由所有可用的状态机执行。一旦创建该条目的领导者在大多数服务器(例如,图6中的第7项)上复制了该条目，日志条目就会被提交。这也提交了领导者日志中的所有前项，包括先前领导者创建的项。第5.4节讨论了领导者变更后适用该规则时的一些细微之处，也表明了这种承诺的定义是安全的。领导者跟踪其知道要提交的最高索引，并将该索引包含在未来的AppendEntries RPCs (包括心跳)中，以便另一个执行。")]),t._v(" "),_("p",[t._v("我们设计了Raft日志机制来保持不同服务器上日志之间的高一致性。这不仅简化了系统的行为，使其更可预测，而且是确保安全的重要组成部分。Raft维护以下属性，它们共同构成了图3中的Log Matching Property：")]),t._v(" "),_("ul",[_("li",[t._v("如果不同日志中的两个条目具有相同的索引和术语，那么它们存储相同的命令。")]),t._v(" "),_("li",[t._v("如果不同日志中的两个条目具有相同的索引和术语，那么日志在所有前面的条目中都是相同的。")])]),t._v(" "),_("p",[t._v("第一种性质源于领导者在给定的任期内最多创建一个具有给定日志索引的条目，且日志条目在日志中的位置从不改变。第二个性质由Append Entries进行简单的一致性检查来保证。当发送AppendEntries RPC时，Leader在其日志中包含项的索引和项，该项立即位于新项之前。如果跟随者在其日志中未找到具有相同索引和术语的条目，则拒绝新条目。一致性检查作为一个归纳步骤：日志的初始空状态满足日志匹配属性，并且当日志被扩展时，一致性检查保持日志匹配属性。因此，当AppendEntries成功返回时，领导者通过新的条目知道跟随者的日志与自己的日志完全相同。")]),t._v(" "),_("p",[t._v("​\t\t正常运行时，领导者和跟随者的日志保持一致，因此Append Entries一致性检查不会失败。然而，Leader崩溃可能会留下日志不一致的(老的领导者可能没有完全复制其日志中的所有条目)。这些不一致性可能会在一系列领导者和跟随者崩溃的情况下发生。图7说明了追随者的日志可能与新领导者不同的方式。跟随者可能缺失存在于领导者身上的条目，也可能拥有不存在于领导者身上的额外条目，或者两者兼而有之。日志中的缺失项和无关项可能跨越多个词条。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218152745720.png",alt:"image-20231218152745720"}})]),t._v(" "),_("p",[t._v("​\t\t在Raft中，领导者通过强迫追随者的日志复制自己的日志来处理不一致。这意味着追随者日志中相互冲突的条目会被来自领导者日志的条目覆盖。第5.4节将表明，如果再加上一个限制，这是安全的。")]),t._v(" "),_("p",[t._v("​\t\t为了使一个跟随者的日志与自己的日志保持一致，领导者必须找到两个日志一致的最新日志条目，在该点之后删除跟随者日志中的任何条目，并在该点之后将领导者的所有条目发送给跟随者。所有这些操作都是为了响应AppendEntries RPCs执行的一致性检查。领导者为每个跟随者维护一个nextIndex，它是领导者将要发送给该跟随者的下一个日志条目的索引。当一个领导者首次上台时，它会在其log (图7中11)中的最后一个索引值之后将所有next Index值初始化为该索引。如果一个追随者的日志与领导者的日志不一致，那么在下一个AppendEntries RPC中，AppendEntries一致性检查将失败。拒绝后，领导者对nextIndex进行减量，并重试AppendEntries RPC。最终next Index将达到领导者和跟随者日志匹配的点。当这种情况发生时，AppendEntries就会成功，它会删除跟随者日志中任何冲突的条目，并从领导者日志中追加条目(如果有的话)。一旦AppendEntries成功，跟随者的日志将与领导者的日志保持一致，并且在剩下的任期内将保持这种方式。")]),t._v(" "),_("p",[t._v("​\t\t如果需要，可以对协议进行优化，以减少被拒绝的AppendEntries RPC的数量。例如，当拒绝AppendEntries请求时，跟随者可以包括冲突项的任期和该任期为词条存储的第一个索引。有了这些信息，管理者可以减少next Index，以绕过该词项中所有冲突的词条；对于有冲突的条目，每个条目需要一个附录条目RPC，而不是每个条目需要一个RPC。在实践中，我们怀疑这种优化是必要的，因为失败很少发生，而且不太可能会有许多不一致的条目。")]),t._v(" "),_("p",[t._v("​\t\t在这种机制下，领导人上台后不需要采取任何特别行动来恢复日志一致性。它刚开始正常运行，日志自动收敛以响应AppendEntries一致性检查的失败。领导者从不覆盖或删除自己日志(图3中的领导者附属性)中的条目。")]),t._v(" "),_("p",[t._v("​\t\t这种日志复制机制体现了第2节所描述的理想的共识属性：只要大多数服务器都处于运行状态，Raft就可以接受、复制和应用新的日志条目；在正常情况下，一个新的条目可以用一轮RPC复制到集群的大部分；并且单个慢速跟随者不会影响性能。")]),t._v(" "),_("h3",{attrs:{id:"_5-4、安全性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4、安全性"}},[t._v("#")]),t._v(" 5.4、安全性")]),t._v(" "),_("p",[t._v("​\t\t前面的部分描述了Raft如何选举领导者和复制日志条目。然而，到目前为止所描述的机制还不足以确保每个状态机以相同的顺序执行完全相同的命令。例如，当领导者提交多个日志条目时，一个追随者可能不可用，那么它可以被选举为领导者，并用新的条目覆盖这些条目；因此，不同的状态机可能执行不同的命令序列。")]),t._v(" "),_("p",[t._v("​\t\t本节通过增加对哪些服务器可能被选为领导者的限制来完成Raft算法。该限制保证了任一给定任期的领导人包含前一任期(由图3可知Leader Completeness Property)中提交的所有词项。考虑到选举限制，我们接着使承诺规则更加精确。最后，我们给出了Leader Completeness属性的证明示意图，并展示了它如何导致复制状态机的正确行为。")]),t._v(" "),_("h4",{attrs:{id:"_5-4-1、选举限制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-1、选举限制"}},[t._v("#")]),t._v(" 5.4.1、选举限制")]),t._v(" "),_("p",[t._v("​\t\t在任何强领导者共识算法中，领导者最终都必须存储所有提交的日志条目。在一些共识算法中，如Viewstamped Replication [ 22 ]，即使领导人最初不包含所有提交的条目，也可以被选举出来。这些算法包含额外的机制来识别缺失的条目，并将其传送给新的领导人，无论是在选举过程中还是在选举后不久。遗憾的是，这导致了相当大的额外机制和复杂性。Raft使用了一种更简单的方法，它保证每位新领导人从当选的那一刻起就有来自前任的所有提交条目，而不需要将这些条目移交给领导人。这意味着日志条目只沿着一个方向流动，从领导者到跟随者，并且领导者从不覆盖他们日志中的现有条目。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218153136681.png",alt:"image-20231218153136681"}})]),t._v(" "),_("p",[t._v('​\t\tRaft使用投票过程来阻止候选人赢得选举，除非其日志包含所有提交的条目。候选人必须联系集群中的大多数才能当选，这意味着每个提交的条目必须至少存在于其中一个服务器中。如果候选者的日志至少与该多数(其中" up-to-date "的定义如下)中的任何其他日志一样是最新的，那么它将保留所有提交的条目。RequestVote RPC实现了这一限制：RPC包含关于候选人日志的信息，如果投票人自己的日志比候选人的日志更新，则投票人拒绝投票。')]),t._v(" "),_("p",[t._v("​\t\tRaft通过比较日志中最后一个条目的索引和任期来确定两个日志中哪个最新。如果日志的最后一个条目有不同的任期，那么后一个任期的日志更新得更快。如果日志以相同的任期结束，那么无论哪个日志都是最新的。")]),t._v(" "),_("h4",{attrs:{id:"_5-4-2、从以前的任期提交条目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-2、从以前的任期提交条目"}},[t._v("#")]),t._v(" 5.4.2、从以前的任期提交条目")]),t._v(" "),_("p",[t._v("​\t\t如第5.3节所述，一个领导者知道当一个记录存储在大多数服务器上时，就会提交该记录。如果一个领导者在提交记录之前崩溃，未来的领导者将尝试完成记录的复制。然而，一个领导者不能立即断定来自上一个任期的记录一旦存储在大多数服务器上就会被提交。图片8说明了一个旧日志记录存储在大多数服务器上，但仍然可以被未来的领导者覆盖的情况。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218153359754.png",alt:"image-20231218153359754"}})]),t._v(" "),_("p",[t._v("​\t\t为了消除如图8所示的问题，Raft从不通过计数副本来提交以前任期中的日志项。只有来自领导者当前任期的日志条目通过计数副本提交；一旦以这种方式提交了来自当前任期的条目，那么由于日志匹配属性，所有以前的条目都是间接提交的。在某些情况下，领导者可以安全地得出结论，一个较旧的日志条目被提交(例如,如果该条目存储在每个服务器上)，但是Raft为了简单起见采取了更保守的方法。")]),t._v(" "),_("p",[t._v('​\t\tRaft在承诺规则中引起了这种额外的复杂性，因为当一个领导者从以前的任期复制条目时，日志条目会保留它们的任期号。在其他共识算法中，如果新的领导者从以前的"任期"中复制条目，那么它必须用新的"任期号"来复制。Raft的方法使得对日志条目的推理变得更加容易，因为它们随着时间的推移和跨日志保持相同的任期数。此外，与其他算法(其他算法必须发送冗余的日志条目来重新编号,然后才能提交)相比，Raft中的新领导者从以前的任期发送的日志条目更少。')]),t._v(" "),_("h4",{attrs:{id:"_5-4-3、安全论证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-3、安全论证"}},[t._v("#")]),t._v(" 5.4.3、安全论证")]),t._v(" "),_("p",[t._v("​\t\t考虑到完全Raft算法，我们现在可以更精确地论证Leader Completeness Property成立(这种论证是建立在安全性证明的基础上的;见9.2节)。我们假设Leader完备性不成立，那么我们证明了一个矛盾。假设任期T的领导者( leaderT )提交一个来自其任期的日志条目，但该日志条目不是由某个未来任期的领导者存储的。考虑最小项U > T，其领导者( leaderU )不存储条目。")]),t._v(" "),_("p",[t._v("1、提交的条目在其当选(领导者从不删除或改写条目)时必须从leaderU的日志中缺席。")]),t._v(" "),_("p",[t._v('2、Leader T在多数集群上复制了该条目，Leader U获得了多数集群的投票。因此，至少有一个服务器( "选民")既接受了leaderT的进入，又投票给leaderU，如图9所示。选民是达成矛盾的关键。')]),t._v(" "),_("p",[t._v("3、投票者在投票给领导人U之前，必须接受领导人T的承诺进入；否则将拒绝Leader T (其当前任期将高于T)的Append Entries请求。")]),t._v(" "),_("p",[t._v("4、投票者在投票给leaderU时仍然保存条目，因为每个干预的领导者都包含条目(假设)，领导者从不删除条目，而追随者只有在与领导者发生冲突时才删除条目。")]),t._v(" "),_("p",[t._v("5、选民将投票权授予领导人U，因此领导人U的日志必须与选民的日志一样最新。这就引出了两个矛盾之一。")]),t._v(" "),_("p",[t._v("6、首先，如果投票者和leaderU共享同一个最后一个日志项，那么leaderU的日志必须至少和投票者的日志一样长，所以它的日志包含了投票者日志中的每个条目。这是一个矛盾，因为选民包含提交的条目，而领导人U被假定不包含提交的条目。")]),t._v(" "),_("p",[t._v("7、否则，领导人U的最后一个日志任期一定大于选民。而且，它大于T，因为选民的最后一个日志任期至少为T (它包含从任期T中提交的条目)。创建leaderU的最后一个日志条目的早期leader (假设)必须在其日志中包含提交的条目。然后，根据日志匹配性质，leaderU的日志中也必须包含提交的条目，这是一个矛盾。")]),t._v(" "),_("p",[t._v("8、这就完成了矛盾。因此，大于T的所有任期的领导人必须包含T任期中提交的所有条目。")]),t._v(" "),_("p",[t._v("9、日志匹配属性保证未来的领导者也会包含间接提交的条目，如图8 ( d )中的索引2。")]),t._v(" "),_("p",[t._v("​\t\t给定Leader Completeness Property，我们可以从图3中证明状态机安全属性，即如果一个服务器在其状态机中应用了一个给定索引的日志项，那么任何其他服务器都不会为相同的索引应用不同的日志项。当服务器向其状态机应用日志条目时，其日志必须与通过该条目的领导登录完全相同，并且必须提交该条目。现在考虑任意服务器应用给定日志索引的最低项；日志完整性属性保证所有较高级别的领导者都会存储相同的日志条目，因此在以后的级别中应用索引的服务器将应用相同的值。因此，状态机安全属性成立。")]),t._v(" "),_("p",[t._v("​\t\t最后，Raft要求服务器按照日志索引顺序申请条目。结合状态机安全属性，这意味着所有服务器将以相同的顺序向其状态机应用完全相同的日志条目。")]),t._v(" "),_("h3",{attrs:{id:"_5-5、跟随者和候选者崩溃"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-5、跟随者和候选者崩溃"}},[t._v("#")]),t._v(" 5.5、跟随者和候选者崩溃")]),t._v(" "),_("p",[t._v("​\t\t在此之前，我们一直关注领导者失败。追随者和候选崩溃比领导者崩溃处理起来要简单得多，并且两者的处理方式相同。如果一个追随者或候选成员崩溃，那么未来发送给它的RequestVote和AppendEntries RPCs将失败。Raft通过无限期地重试来处理这些失败；如果崩溃的服务器重新启动，那么RPC将成功完成。如果一个服务器在完成一个RPC之后但在响应之前崩溃，那么它在重新启动之后会再次收到相同的RPC。Raft RPCs是幂等的，因此这不会造成伤害。例如，如果一个追随者收到一个包含其日志中已经存在的日志条目的AppendEntries请求，那么它会忽略新请求中的那些条目。")]),t._v(" "),_("h3",{attrs:{id:"_5-6、时间和有效性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-6、时间和有效性"}},[t._v("#")]),t._v(" 5.6、时间和有效性")]),t._v(" "),_("p",[t._v("​\t\t我们对Raft的要求之一是安全不能依赖于时间：系统不能仅仅因为某些事件发生得比预期的更快或更慢而产生不正确的结果。然而，可用性(系统及时响应客户的能力)必然依赖于时间。例如，如果消息交换的时间比服务器崩溃之间的典型时间长，那么候选人就不会在选举中获胜；没有稳定的领导者，Raft就无法进步。")]),t._v(" "),_("p",[t._v("​\t\t领导人选举是Raft最为关键的环节。只要系统满足以下时序要求，Raft将能够选举并维持一个稳定的领导者：")]),t._v(" "),_("p",[t._v("​\t                                                  广播时间 << 选举超时 << MTBF")]),t._v(" "),_("p",[t._v("​\t\t在这个不等式中，广播时间是一个服务器并行地向集群中的每个服务器发送RPC并接收它们的响应所花费的平均时间；ElectionTimeout是5.2节中描述的选举超时；MTBF是单个服务器的平均故障间隔时间。广播时间应该比选举超时少一个数量级，以便领导人能够可靠地发送心跳消息，以保持追随者不开始选举；考虑到用于选举超时的随机方法，这种不平等也使得分裂投票不太可能。选举超时应该比MTBF少几个数量级，才能使系统稳定运行。当领导人崩溃时，大约在选举超时期间，系统将不可用 ；我们希望这只代表整体时间的一小部分。")]),t._v(" "),_("p",[t._v("​\t\t广播时间和MTBF是底层系统的属性，而选举超时是我们必须选择的。Raft的RPCs通常要求接收者将信息持久化到稳定的存储状态，因此根据存储技术的不同，广播时间可能从0.5 ms到20ms不等。因此，选举超时很可能在10 ~ 500ms之间。典型的服务器MTBF为几个月甚至更长时间，很容易满足时间要求。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218154147476.png",alt:"image-20231218154147476"}})]),t._v(" "),_("h2",{attrs:{id:"_6、群集成员资格更改"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、群集成员资格更改"}},[t._v("#")]),t._v(" 6、群集成员资格更改")]),t._v(" "),_("p",[t._v("​\t\t到目前为止，我们假设集群配置(参与共识算法的服务器集合)是固定的。在实际应用中，偶尔会需要更改配置，例如在服务器出现故障时进行替换或者改变复制程度。虽然这可以通过将整个集群离线，更新配置文件，然后重新启动集群来完成，但这会使集群在切换期间不可用。此外，如果有任何手动步骤，都有操作者错误的风险。为了避免这些问题，我们决定自动化配置更改并将其合并到Raft共识算法中。")]),t._v(" "),_("p",[t._v("​\t\t为了使配置变更机制是安全的，在过渡期内必须没有可能出现两个领导人连任的情况。遗憾的是，任何服务器直接从旧配置切换到新配置的方法都是不安全的。不可能一次性原子地切换所有的服务器，因此在过渡(见图10)期间，集群可能会分裂成两个独立的多数。")]),t._v(" "),_("p",[t._v("​\t\t为了保证安全性，配置变更必须采用两阶段的方式。这两个阶段的实施方式多种多样。例如，一些系统(例如)使用第一阶段来禁用旧的配置，因此无法处理客户端请求；然后第二阶段启用新的配置。在Raft中，集群首先切换到一个过渡配置，我们称之为联合一致性；一旦联合共识已经承诺，系统然后过渡到新的配置。联合共识结合了旧的和新的配置：")]),t._v(" "),_("ul",[_("li",[t._v("日志项在两种配置下都被复制到所有服务器")]),t._v(" "),_("li",[t._v("来自任一配置的任何服务器都可以充当领导者。")]),t._v(" "),_("li",[t._v("协议(对于选举和进入承诺)要求从旧的和新的配置中分离出大多数。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218154351260.png",alt:"image-20231218154351260"}})]),t._v(" "),_("p",[t._v("联合共识允许单个服务器在不同时间在配置之间进行转换，而不会损害安全性。此外，联合共识允许集群在整个配置更改期间继续服务客户端请求。")]),t._v(" "),_("p",[t._v("​\t\t集群配置使用复制日志中的特殊条目进行存储和通信；图11说明了配置变化过程。当领导者收到将配置从Cold更改为Cnew的请求时，它将联合共识的配置(Cold,new 在图片里)存储为一个日志条目，并使用前面描述的机制对该条目进行复制。一旦给定的服务器在其日志中添加新的配置项，它将使用该配置为所有未来的决策(一个服务器总是在其日志中使用最新的配置,而不管该条目是否被提交)。这意味着，领导者将使用Cold,new 的规则来确定Cold,new 的日志条目何时提交。如果领导人崩溃，根据获胜候选人是否获得了Cold,new ，可以在Cold或Cold,new 下选择新的领导人。无论如何，Cnew在此期间不能做出单方面的决定。")]),t._v(" "),_("p",[t._v("​\t\t一旦Cold,new 已经提交，Cold和Cnew都不能在未经对方批准的情况下做出决策，并且Leader Completeness Property保证只有具有Cold,new 日志项的服务器才能被选为Leader。现在，领导者创建一个描述Cnew的日志条目并将其复制到集群是安全的。再次，这种配置一经看到就会在每台服务器上生效。当新的配置已经在Cnew的规则下提交时，旧的配置是不相关的，不在新配置中的服务器可以被关闭。如图11所示，不存在Cold和Cnew都可以进行单边决策的时刻；这就保证了安全性。")]),t._v(" "),_("p",[t._v("​\t\t重新配置还有三个问题需要解决。第一个问题是新服务器最初可能不会存储任何日志项。如果在这种状态下将它们添加到集群中，它们可能需要相当长的时间才能赶上，在此期间可能无法提交新的日志条目。为了避免可用性缺口，Raft在配置变更前引入了一个额外的阶段，新服务器以无投票成员(领导者向他们复制日志条目,但他们不被考虑为多数)的身份加入集群。一旦新的服务器赶上了集群的其余部分，就可以进行如上所述的重构。")]),t._v(" "),_("p",[t._v("​\t\t第二个问题是，集群领导者可能不是新配置的一部分。在这种情况下，领导者一旦提交了Cnew日志条目，就下台(返回到跟随状态)。这意味着，当领导者管理一个不包含自身的集群时，会有一段时间(而正在进行Cnew)；它复制日志条目，但不以多数计算。由于这是新配置能够独立运行(从Cnew中选择一个领导者将永远是可能的)的第一点，所以在Cnew提交时发生了领导者转换。在此之前，可能只有来自Cold的一个服务者才能当选领导人。")]),t._v(" "),_("p",[t._v("​\t\t第三个问题是移除的服务器(那些不在Cnew)会破坏集群。这些服务器不会收到心跳，因此它们会超时并开始新的选举。然后他们会发送带有新任期的RequestVote RPC，这将导致当前领导者恢复到跟随者状态。最终会选出一个新的领导者，但是移除的服务器会再次超时，过程会重复，导致可用性差。")]),t._v(" "),_("p",[t._v("​\t\t为了防止这个问题，服务器在相信当前领导者存在的情况下会忽略RequestVote RPC。具体来说，如果服务器在当前领导人的最低选举超时时间内收到RequestVote RPC，则不更新其任期或给它投票。这并不影响正常的选举，每个服务器在开始选举之前至少等待一个最小的选举超时。然而，它有助于避免从移除的服务器中断：如果一个领导者能够得到心跳到它的集群，那么它不会被更大的任期号废黜。")]),t._v(" "),_("h2",{attrs:{id:"_7、日志压缩"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7、日志压缩"}},[t._v("#")]),t._v(" 7、日志压缩")]),t._v(" "),_("p",[t._v("​\t\tRaft日志在正常运行时增长，以容纳更多的客户端请求，但在实际系统中，它不能无限制地增长。随着日志的增长，占用的空间更大，需要更多的时间进行回放。这最终会造成可用性问题，没有某种机制丢弃日志中积累的过时信息。")]),t._v(" "),_("p",[t._v("​\t\t快照是最简单的压缩方法。在快照中，整个当前系统状态被写入一个稳定存储的快照，然后整个日志上升到该点被丢弃。在Chubby和ZooKeeper中使用了快照技术，本节剩余部分描述了Raft中的快照技术。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218155339348.png",alt:"image-20231218155339348"}})]),t._v(" "),_("p",[t._v("​\t\t增量式的压缩方法，如日志清理[ 36 ]和日志结构合并树[ 30、5 ]，也是可能的。这些操作一次只对一小部分数据进行操作，因此它们将压实的荷载随着时间的推移更加均匀地分布。他们首先选择一个数据区域，该区域积累了许多被删除和覆盖的对象，然后更紧凑地重写该区域的活动对象，并释放该区域。与快照相比，这需要显著的额外机制和复杂性，通过始终操作整个数据集来简化问题。虽然日志清理需要修改Raft，但状态机可以使用与快照相同的接口实现LSM树。")]),t._v(" "),_("p",[t._v("​\t\t图12展示了Raft中快照的基本思想。每个服务器独立地进行快照，只覆盖其日志中提交的条目。大部分工作由状态机将其当前状态写入快照组成。Raft还包括快照中少量的元数据：最后包含的索引是快照替换(最后一个条目应用了状态机)的日志中最后一个项的索引，最后包含的任期是这个任期的条目。这些被保存以支持AppendEntries的一致性检查，因为在快照之后的第一个日志条目需要一个以前的日志索引和任期。为了启用集群成员资格更改(第6节)，快照还包括了日志中截至最后一个包含索引的最新配置。一旦服务器完成快照的写入，它可以通过最后包含的索引删除所有的日志条目，以及任何以前的快照。")]),t._v(" "),_("p",[t._v("​\t\t虽然服务器通常独立地进行快照，但领导者必须偶尔向落后的跟随者发送快照。当领导者已经丢弃了它需要发送给跟随者的下一个日志项时，这种情况就会发生。幸运的是，这种情况在正常运行时不太可能发生：一个跟上了领导者的追随者就已经拥有了这个条目。然而，一个异常慢的跟随者或者一个新的服务器加入集群(第6节)是不会的。使这样的跟随者更新的方法是让领导者在网络上发送一个快照。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218155509506.png",alt:"image-20231218155509506"}})]),t._v(" "),_("p",[t._v("​\t\t领导者使用名为InstallSnapshot的新型RPC向距离过远的跟随者发送快照；见图13。当跟随者接收到这个RPC的快照时，它必须决定对其现有的日志条目做什么。通常快照会包含新的信息，而不是已经在接收者的日志中。在这种情况下，跟随者丢弃它的整个日志；它全部被快照所替代，并且可能存在与快照冲突的未提交项。如果跟随者收到的是描述其日志(由于重传或误传)前缀的快照，则删除快照覆盖的日志条目，但快照后面的条目仍然有效，必须保留。")]),t._v(" "),_("p",[t._v("​\t\t这种快照方式背离了Raft的强领导者原则，因为追随者可以在不知道领导者的情况下进行快照。然而，我们认为这种背离是正当的。虽然有一个领导者有助于避免在达成共识时产生冲突的决策，但在快照时已经达成共识，因此没有决策冲突。数据仍然只从领导人流向追随者，现在只有追随者可以重新组织他们的数据。")]),t._v(" "),_("p",[t._v("​\t\t我们考虑了一种替代的基于领导者的方法，其中只有领导者会创建一个快照，然后它会将这个快照发送给它的每个追随者。然而，这有两个缺点。首先，将快照发送给每个跟随者会浪费网络带宽并减慢快照过程。每个跟随者已经拥有生成自己的快照所需的信息，服务器从其本地状态生成快照通常比通过网络发送和接收快照要便宜得多。第二，领导者的执行会更加复杂。例如，领导者需要将快照并行地发送给跟随者，同时向跟随者复制新的日志条目，以免阻塞新的客户端请求。")]),t._v(" "),_("p",[t._v("​\t\t影响快照性能的问题还有两个。首先，服务器必须决定何时进行快照。如果服务器快照太频繁，会浪费磁盘带宽和能量；如果快照次数过少，则有耗尽其存储容量的风险，并且会增加重新启动时重放日志所需的时间。一种简单的策略是当日志达到固定大小的字节时进行快照。如果将此大小设置为显著大于快照的预期大小，那么用于快照的磁盘带宽开销将很小。")]),t._v(" "),_("p",[t._v("​\t\t第二个性能问题是写快照会花费大量的时间，我们不希望这样会延迟正常的操作。解决方案是使用写时复制技术，以便在不影响正在写入的快照的情况下接受新的更新。例如，使用函数型数据结构构建的状态机自然支持这一点。或者，可以使用操作系统的写时复制支持(例如, Linux下的fork)来创建整个状态机(我们的实现采用了这种方法)的内存快照。")]),t._v(" "),_("h2",{attrs:{id:"_8、客户交互"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8、客户交互"}},[t._v("#")]),t._v(" 8、客户交互")]),t._v(" "),_("p",[t._v("​\t\t这一部分描述了客户端如何与Raft进行交互，包括客户端如何找到集群的领导者以及Raft如何支持可线性化的语义[ 10 ]。这些问题适用于所有基于共识的系统，而Raft的解决方案与其他系统类似。")]),t._v(" "),_("p",[t._v("​\t\tRaft的客户端将自己的所有请求都发送给领导者。当客户端首先启动时，它连接到一个随机选择的服务器。如果客户的第一选择不是领导者，则该服务器将拒绝客户的请求，并从( AppendEntries请求包括领导者的网络地址)中提供关于它听到的最近领导者的信息。如果领导者崩溃，客户端请求将超时；然后，客户端通过随机选择的服务器再次尝试。")]),t._v(" "),_("p",[t._v("​\t\tRaft的目标是实现可线性化的语义(每个操作在其调用和响应之间的某一时刻看起来是瞬时执行的,精确地执行一次)。然而，正如所描述的那样，Raft可以多次执行命令：例如，如果领导者在提交日志条目后但在响应客户机之前崩溃，客户机将使用新的领导者重试该命令，导致该命令被再次执行。解决方案是让客户端为每个命令分配唯一的序列号。然后，状态机跟踪每个客户端处理的最新序列号，以及相关的响应。如果接收到序列号已经被执行的命令，则立即响应，而不需要重新执行请求。")]),t._v(" "),_("p",[t._v("​\t\t只读操作可以在不将任何内容写入日志的情况下进行处理。但是，如果不采取额外的措施，这将面临返回陈旧数据的风险，因为响应请求的领导人可能已经被新的领导人所取代，而新的领导人对此并不知情。可线性化的读取不得返回过时的数据，Raft在不使用日志的情况下需要两个额外的预防措施来保证这一点。首先，领导人必须掌握哪些条目是已经提交的最新信息。领导者完备性属性保证领导者拥有所有提交的条目，但在其任期开始时，它可能不知道这些条目是什么。要弄清楚，它需要从它的任期开始提交一个条目。Raft通过让每个领导者在其任期开始时在日志中提交一个空白的no - op条目来处理这个问题。其次，在处理只读请求(如果最近的领导人当选,其信息可能是陈旧的)之前，领导者必须检查其是否已被撤销。Raft通过让领导者在响应只读请求之前与集群中的大多数交换心跳消息来处理这个问题。或者，领导者可以依靠心跳机制提供租赁的形式[ 9 ]，但这将依赖于安全性(它假定有界时钟偏差)的时间。")]),t._v(" "),_("h2",{attrs:{id:"_9、实现和评估"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9、实现和评估"}},[t._v("#")]),t._v(" 9、实现和评估")]),t._v(" "),_("p",[t._v("​\t\t我们实现了Raft作为复制状态机的一部分，它为内存云[ 33 ]存储配置信息，并协助内存云协调器的故障转移。Raft实现包含大约2000行C + +代码，不包括测试、注释或空白行。源代码可以免费获得[ 23 ]。基于本文草案，在Raft的各个开发阶段，也有大约25个独立的第三方开源实现[ 34 ]。此外，许多公司正在部署基于Raft的系统[ 34 ]。本节余下部分将使用可理解性、正确性和性能三个标准来评估Raft。")]),t._v(" "),_("h3",{attrs:{id:"_9-1、可理解性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-1、可理解性"}},[t._v("#")]),t._v(" 9.1、可理解性")]),t._v(" "),_("p",[t._v("​\t\t为了测量Raft相对于Paxos的可理解性，我们在斯坦福大学的高级操作系统课程和加州大学伯克利分布式计算课程中对高年级本科生和研究生进行了实验研究。我们录制了Raft和Paxos的一个视频讲座，并制作了相应的小测验。Raft讲座除了日志压缩外，还涵盖了本文的内容；Paxos演讲涵盖了足够的素材来创建一个等价的复制状态机，包括单级Paxos、多级Paxos、重配置以及实践中需要的一些优化(如领导者选举)。测验测试了学生对算法的基本理解，并要求学生对角点案例进行推理。每个学生观看一个视频，进行相应的测验，观看第二个视频，进行第二个测验。大约一半的被试先做了Paxos部分，另一半先做了Raft部分，目的是考虑到从第一部分研究中获得的成绩和经验的个体差异。我们比较了参与者在每次测验中的得分，以确定参与者是否对Raft有更好的理解。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218160134456.png",alt:"image-20231218160134456"}})]),t._v(" "),_("p",[t._v("​\t\t我们尽量使Paxos与Raft的比较公平。实验通过两种方式对Paxos进行了偏爱：43名被试中有15人报告与Paxos有一定的先前经验，且Paxos视频比Raft视频长14 %。如表1所示，我们已采取措施减轻潜在的偏倚来源。我们的所有材料均可用于综述[ 28、31 ]。")]),t._v(" "),_("p",[t._v("​\t\t平均而言，被试在Raft测验上的得分比在Paxos测验(在可能的60分中, Raft评分平均为25.7分, Paxos评分平均为20.8分)上的得分高4.9分；图14显示了他们的个人得分。配对t检验表明，在95 %的置信度下，Raft分数的真实分布比Paxos分数的真实分布至少大2.5个点。我们还创建了一个线性回归模型，根据三个因素来预测新学生的测验成绩：他们参加了哪些测验，他们先前的Paxos经验的程度，以及他们学习算法的顺序。该模型预测，选择问答题会产生12.5分的有利于Raft的差异。这显著高于观察到的4.9分的差异，因为许多实际学生有过Paxos的经验，这对Paxos的帮助很大，而对Raft的帮助略低。令人好奇的是，该模型还预测，对于已经参加过Paxos测验的人来说，Raft的得分要低6.3分；虽然我们不知道为什么，但这似乎在统计上是显著的。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218160608361.png",alt:"image-20231218160608361"}})]),t._v(" "),_("p",[t._v("​\t\t我们还在测试后对参与者进行了调查，以了解他们认为哪种算法更容易实现或解释；这些结果如图15所示。绝大多数参与者认为Raft更容易实施和解释(每个问题41个中的33个)。然而，这些自我报告的感受可能比参与者的测验分数更不可靠，并且参与者可能对我们的假设Raft更容易理解的知识有偏见。")]),t._v(" "),_("p",[t._v("​\t\t关于Raft用户研究的详细讨论可参见[ 31 ]。")]),t._v(" "),_("h3",{attrs:{id:"_9-2、准确性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-2、准确性"}},[t._v("#")]),t._v(" 9.2、准确性")]),t._v(" "),_("p",[t._v("​\t\t我们已经为第5节所述的共识机制制定了形式化的规范和安全性证明。形式规格说明[ 31 ]使用TLA +规格说明语言[ 17 ]使得图2中总结的信息完全精确。它长约400行，并作为证明的主题。对于任何实施Raft的人来说，它本身也是有用的。我们利用TLA证明系统[ 7 ]对对数完备性进行了机械性证明。然而，这种证明依赖于未被机械性检查过的不变量(例如,我们没有证明该规范的类型安全性)。此外，我们还写了一个关于状态机安全性质的非正式证明[ 31 ]，即完整的(它仅依赖于规范)和相对精确的(长约3500字)。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218160743425.png",alt:"image-20231218160743425"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/zhaoyb-coder/pic-repo/main/image-20231218160753635.png",alt:"image-20231218160753635"}})]),t._v(" "),_("h3",{attrs:{id:"_9-3、性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-3、性能"}},[t._v("#")]),t._v(" 9.3、性能")]),t._v(" "),_("p",[t._v("​\t\tRaft的性能与Paxos等其他一致性算法类似。对于性能而言，最重要的情况是当一个已建立的领导者正在复制新的日志条目时。Raft使用最少的消息数量(从领导者到半个集群的单次往返)来实现。也有可能进一步提高Raft的性能。例如，它很容易支持批处理和流水线请求，以获得更高的吞吐量和更低的延迟。对于其他算法，文献中已经提出了各种优化；其中许多可以应用于Raft，但我们留给未来的工作。")]),t._v(" "),_("p",[t._v("​\t\t我们使用我们的Raft实现来衡量Raft的领导人选举算法的表现，并回答两个问题。首先，选举过程是否快速收敛?第二，领导者崩溃后能够达到的最小停机时间是多少?")]),t._v(" "),_("p",[t._v("​\t\t为了衡量领导人选举，我们对一个由5个服务器组成的集群的领导人进行了多次崩溃，并确定了检测崩溃和选举新领导人(见图16)所需的时间。为了生成最坏情况的场景，每个试次中的服务器具有不同的日志长度，因此有些候选者没有资格成为领导者。此外，为了鼓励分割投票，我们的测试脚本在结束其进程(这近似于领导者在崩溃前复制一个新的日志记录的行为)之前触发了来自领导者的心跳RPC的同步广播。领导者在其心跳间隔内均匀随机崩溃，这是所有测试的最小选举超时时间的一半。因此，最小可能的停机时间约为最小选举超时时间的一半。")]),t._v(" "),_("p",[t._v("​\t\t图16中的顶图表明，选举超时中少量的随机化就足以避免选举中的分裂投票。在没有随机性的情况下，由于许多分裂选票，在我们的测试中，领导人选举的时间持续超过10秒。仅增加5ms的随机性有显著帮助，导致中位停机时间为287ms。使用更多的随机性改善了最坏情况行为：随机性为50ms时，最坏情况完成时间(超过1000次试验)为513ms。")]),t._v(" "),_("p",[t._v("​\t\t图16的底图表明，通过减少选举超时可以减少停机时间。在选举超时12 - 24ms的情况下，平均只需要35ms就可以选出一个领袖(最长试次为152 ms)。然而，将超时时间降低到这一点上，就违背了Raft的时间要求：在其他服务器开始新的选举之前，领导人很难广播心跳。这会造成不必要的领导者变更，降低整体系统可用性。我们建议使用保守的选举超时，如150 - 300ms；这样的超时不太可能引起不必要的领导变更，并且仍然会提供良好的可用性。")]),t._v(" "),_("h2",{attrs:{id:"_10、有关著作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10、有关著作"}},[t._v("#")]),t._v(" 10、有关著作")]),t._v(" "),_("p",[t._v("与一致性算法相关的出版物不胜枚举，其中很多属于以下几类：")]),t._v(" "),_("ul",[_("li",[t._v("兰波特最初对Paxos的描述[ 15 ]，并试图对[ 16、20、21 ]进行更清晰的解释。")]),t._v(" "),_("li",[t._v("Paxos的阐述，填补了缺失的细节，修改了算法，为实现[ 26、39、13 ]提供了更好的基础。")]),t._v(" "),_("li",[t._v("实现共识算法的系统，如Chubby [ 2、4]，ZooKeeper [ 11、12]和Spanner[ 6 ]。虽然Chubby和Spanner的算法都声称是基于Paxos的，但并没有详细公布。ZooKeeper的算法已经发表的比较详细，但是和Paxos有很大的不同。")]),t._v(" "),_("li",[t._v("可应用于Paxos [ 18、19、3、25、1、27]的性能优化。")]),t._v(" "),_("li",[t._v("Oki和Liskov的VR ( Viewstamped Replication )是与Paxos几乎同时发展起来的一种共识替代方法。最初的描述[ 29 ]与用于分布式事务的协议交织在一起，但核心共识协议在最近的一次更新中被分离[ 22 ]。VR采用基于领导者的方法，与Raft有许多相似之处。")])]),t._v(" "),_("p",[t._v("Raft与Paxos最大的区别在于Raft的强势领导权：Raft将领导人选举作为共识协议的重要组成部分，在领导人身上尽可能多地体现功能性。这种方法产生了更简单的算法，更容易理解。例如，在Paxos中，领导人选举与基本的共识协议是正交的：它只是一种绩效优化，而不是达成共识所必需的。然而，这就产生了额外的机制：Paxos既包括达成基本共识的两阶段议定书，也包括单独的领导人选举机制。相比之下，Raft将领导人选举直接纳入共识算法，并将其作为共识两阶段中的第一阶段。这导致了比Paxos更少的机理。")]),t._v(" "),_("p",[t._v("​\t\t与Raft一样，VR和ZooKeeper是基于领导者的，因此与Paxos相比，Raft具有许多优势。然而，Raft比VR或ZooKeeper的机制更少，因为它最大限度地减少了非领导者的功能。例如，Raft中的日志项只向一个方向流动：从AppendEntries RPCs中的领导者向外流动。在VR日志条目中双向流动(在选举过程中,领导人可以收到日志条目)；这导致了额外的机制和复杂性。ZooKeeper发布的描述也将日志条目传递给leader和leader，但其实现方式显然更类似于Raft [ 35 ]。")]),t._v(" "),_("p",[t._v("​\t\tRaft比我们知道的任何其他基于共识的日志复制算法具有更少的消息类型。例如，我们统计了基本共识和成员变更(不包括日志压缩和客户端交互,因为这些几乎独立于算法)使用的消息类型VR和ZooKeeper。VR和ZooKeeper各自定义了10种不同的消息类型，而Raft只有4种消息类型( 2个RPC请求及其响应)。Raft的消息比其他算法的消息稍密集，但总体上比其他算法简单。此外，还描述了VR和ZooKeeper在领导者变化期间传输整个日志的情况；为了优化这些机制，还需要额外的消息类型，以使它们具有实用性。")]),t._v(" "),_("p",[t._v("​\t\tRaft的强领导方法简化了算法，但它排除了一些性能优化。例如，平均主义者Paxos ( EPaxos )采用无领导者方法，在某些条件下可以获得更高的性能[ 27 ]。EPaxos利用状态机命令的可交换性。任何服务器只需一轮通信就可以提交一条命令，只要其他并发提出的命令都与之通信。然而，如果并发提出的命令彼此之间互不通信，EPaxos需要额外的一轮通信。由于任何服务器都可能提交命令，EPaxos很好地平衡了服务器之间的负载，并且在广域网环境下能够达到比Raft更低的延迟。然而，这给帕克斯增加了很大的复杂性。")]),t._v(" "),_("p",[t._v("​\t\t在其他工作中，已经提出或实现了几种不同的簇成员变化方法，包括兰波特的原始提案[ 15 ]，VR [ 22 ]和SMART [ 24 ]。我们选择了Raft的联合共识方法，因为它利用了共识协议的其余部分，因此很少需要额外的机制来进行成员变更。兰波特的基于α的方法并不是Raft的选项，因为它假定没有领导人就可以达成共识。与VR和SMART相比，Raft的重构算法的优点是可以在不限制正常请求处理的情况下发生成员关系的变化；相比之下，VR在配置更改时停止所有正常处理，SMART对未完成请求的数量施加了类似于α的限制。Raft的方法也比VR或SMART增加了更少的机制。")]),t._v(" "),_("h2",{attrs:{id:"_11、结束语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11、结束语"}},[t._v("#")]),t._v(" 11、结束语")]),t._v(" "),_("p",[t._v("​\t\t算法设计往往以正确、高效和/或简洁为首要目标。虽然这些都是有价值的目标，但我们认为，可理解性同样重要。除非开发人员将算法渲染成实际的实现，否则其他任何目标都无法实现，这将不可避免地偏离并扩展发布的形式。除非开发人员对算法有深入的理解，并且能够创建关于它的直觉，否则他们将很难在实现中保留它想要的属性。")]),t._v(" "),_("p",[t._v("​\t\t在本文中，我们讨论了分布式共识的问题，其中一个被广泛接受但难以理解的算法Paxos已经对学生和开发人员提出了多年的挑战。我们开发了一个新的算法Raft，我们已经证明它比Paxos更容易理解。我们也相信Raft为系统构建提供了更好的基础。将可理解性作为首要设计目标改变了我们对待Raft设计的方式；随着设计的进展，我们发现我们反复使用了一些技术，比如分解问题和简化状态空间。这些技术不仅提高了Raft的可理解性，而且使我们更容易确信其正确性。")]),t._v(" "),_("h2",{attrs:{id:"_12、致谢-忽略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12、致谢-忽略"}},[t._v("#")]),t._v(" 12、致谢（忽略）")])])}),[],!1,null,null,null);a.default=v.exports}}]);